import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StatusScreen, initMercadoPago } from '@mercadopago/sdk-react'
import { processPayment, reset } from '../../slices/paymentsSlice';
import Message from '../../components/Message';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import '../Payment/PaymentStatus.css'
import { getUserConfigurations } from '../../slices/configurationSlice';
import { getUserPlans } from '../../slices/plansSlice';
import { MERCADOPAGO_PUBLIC_KEY } from "../../utils/config";

const PaymentStatus = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    const { payment, error:erroPagamento } = useSelector((state) => state.payment);
    let [searchParams, setSearchParams] = useSearchParams();
    const [id, setId] = useState();
    const [planId, setPlanId] = useState();
    const [status, setStatus] = useState();
    const [payment_type, setPaymentType] = useState();
    const [configInit, setConfigInit] = useState(false);

    useEffect(() => {
        if(user && planId){
        const data = {
            paymentId: id,
            status,
            payment_type,
            userId: user._id,
            planId
        }
        dispatch(processPayment({formData:data}))
        }
    }, [dispatch, user, planId])

    useEffect(() => {
        setId(searchParams.get('payment_id'))
        setStatus(searchParams.get('status'))
        setPaymentType(searchParams.get('payment_type'))    
        setPlanId(searchParams.get('external_reference'))           
    }, [])

const initialization = {
    paymentId: id
}

    initMercadoPago(MERCADOPAGO_PUBLIC_KEY, {
        locale: 'pt-BR'
    });

    const onError = async (error) => {
        // callback chamado para todos os casos de erro do Brick
        console.log(error);
    };
    const onReady = async () => {
        /*
          Callback chamado quando o Brick estiver pronto.
          Aqui você pode ocultar loadings do site, por exemplo.
        */
       setConfigInit(true)
    };  
    const handleSubmit = async (e) => {
        /*
          Callback chamado quando o Brick estiver pronto.
          Aqui você pode ocultar loadings do site, por exemplo.
        */
       //setConfigInit(true)
       await dispatch(getUserConfigurations(user._id))
       await dispatch(getUserPlans(user._id));
    navigate("/users/config/"+ user._id)             
};
    return (
        <>
            {payment && id &&
                <StatusScreen
                    initialization={initialization}
                    //customization={customization}
                    onReady={onReady}
                    onError={onError}
                />
            }
            {configInit && payment && payment.status === 'approved' &&
            <input type='submit' value='Iniciar configuração do painel' onClick={handleSubmit} />
            }
        </>
    )
}

export default PaymentStatus