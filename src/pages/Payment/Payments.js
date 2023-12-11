

import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import { processPayment, createPreference, reset } from '../../slices/paymentsSlice';
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react'
import './Payments.css'
import { getUserPlans } from '../../slices/plansSlice';
import { MERCADOPAGO_PUBLIC_KEY } from "../../utils/config";

const Payments = () => {
  const { id: planId } = useParams();
  const { user: userAuth } = useSelector((state) => state.auth);
  const { plans, error, message } = useSelector((state) => state.plans);
  const { payment, preference, errorPay, successPay, messagePay, messagePref, errorPref, successPref } = useSelector((state) => state.payment);
  const { configuration, loading: configLoading } = useSelector((state) => state.configuration);
  const [paymentId, setPayment] = useState('')
  const [initialization, setinitialization] = useState('')
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [plan, setPlan] = useState();
  

  initMercadoPago(MERCADOPAGO_PUBLIC_KEY, {
    locale: 'pt-BR'
  });

  useEffect(() => {
    if(plans){
    const selectedPlan = plans.find(plan => plan._id === planId);
    if (selectedPlan) {
      setPlan(selectedPlan)
    }
  }
  }, [plans]);

  useEffect(() => {    
    if (preference) {
      const initializations = {
        preferenceId: preference?.id
      };            
      setinitialization(initializations)          
    }
  }, [preference]);
  
  useEffect(()=> {   
    if(planId !== '64cc09f4031c07b9b573f828') 
      dispatch(createPreference({planId}));
  }, [planId])
  //#region pagamento 
  //novo plano
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPayment('free')

    const formData = {
      paymentId,
      planId,
      payment_type: 'free',
      status:'approved'
    }
    const newPlanPayment = {
      paymentId,
      planId,
    }
    console.log(newPlanPayment)
    const novoFree = await dispatch(processPayment({ plan: newPlanPayment, formData }));
    await dispatch(getUserPlans(userAuth._id));

    //await dispatch(insertPlans(newPlanPayment));

  };
  const handleConfiguration = async(e)=>{
    navigate("/users/config/"+ userAuth._id)    
  }
  //upgrade de plano
  const handleSubmitUpgrade = async (e) => {
    e.preventDefault()

    const newPlanPayment = {
      paymentId,
      planId,
    }
    window.paymentBrickController.getFormData()
      .then(async ({ formData }) => {
        console.log(formData)
        const novo = await dispatch(processPayment({ plan: newPlanPayment, formData }));
        window.paymentBrickController.unmount()
        navigate('/user/payment/status/' + novo.payload.paymentId);
      })
      .catch((error) => {
        // tratamento de erros ao chamar getFormData()
        console.log(error)
      });
    //dispatch(reset());
    if (payment) {
      window.paymentBrickController.unmount()
      navigate('/user/payment/status/' + payment.paymentId);

      return;
    }
    return;
    //to-do
    //await dispatch(updatePlans(newPlanPayment));
    //await dispatch(getUserPlans(userAuth._id));              
  };
  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };
  const onReady = async () => {
    /*
      Callback chamado quando o Brick estiver pronto.
      Aqui você pode ocultar loadings do seu site, por exemplo.
    */
  };
  //#endregion
  return (
    <div>
      <h1>P<span>agamento</span></h1>
      <div>
        <form >
          <li key="info" className='formup'>
            <h2>Informações do plano:</h2>
          </li>
          {plan &&
            <>
              <li key="nomeplan">
                <p>Nome do plano:{plan.name}</p>
              </li>
              <li key="limiteCarac">
                <p>Limite de Caracteres transcritos:{plan.limiteCaracteres}</p>
              </li>
              <li key="limitedaily">
                <p>Limite de uso diário:{plan.limiteChamadasAPI}</p>
              </li>
              <li key="limittotal">
                <p>Limite de uso Total:{plan.limiteUso}</p>
              </li>
              {plan.recursos && plan.recursos.map((rec) => (
                <li key={rec}>
                  <p>Recursos adicionais:{rec}</p>
                </li>
              ))}
              <li key="valor">
                <p>Valor:{plan.price}</p>
              </li>
            </>
          } 
          
          {/* {configLoading && <input type='submit' value='Aguarde' disabled />} */}
        </form>
        {preference ?
        <div style={{maxWidth: "600px", display:"flex", justifyContent:"center", alignItems:"center", margin:"auto"}}>
          <Wallet initialization={{ preferenceId: preference.id, redirectMode:"self" }}/>
          {errorPref && <Message msg={errorPref} type="error" />}  
          </div>
          :
          // !configLoading && configuration && configuration.active
          //   ?
          //   <input type='submit' value='Upgrade' onClick={handleSubmitUpgrade} />
          //   :
          plan && plan.name === 'free' &&
            <input type='submit' value='Experimentar de graça' onClick={handleSubmit} />          
          
        }
        <hr />
        <h5>Não se preocupe, todas as transações sao processadas pelo<Link to={'https://www.mercadopago.com.br'} style={{ color: 'black', fontWeight: 'normal', textDecoration: 'underline' }}>MercadoPago</Link>e são totalmente seguras.</h5>
        {error && <Message msg={error} type="error" />}              
        {message && <Message msg={message} type="success" />}        
        {successPay && messagePay && <><Message msg={messagePay} type="success"/>
        <input type='submit' value='Iniciar configuração do painel' onClick={handleConfiguration} /></>}   
      </div>
      <div>

      </div>
    </div>
  )
}

export default Payments