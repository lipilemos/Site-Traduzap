import React, { useEffect, useState } from 'react'
import Switch from 'react-switch'
import { useDispatch, useSelector } from 'react-redux';
import { addListContact, deleteListContact, getUserConfigurations, resetConfiguration, updateConfiguration } from '../../slices/configurationSlice';
import imgPlus from '../../images/plus-svgrepo-com.svg'
import imgMinus from '../../images/minus-svgrepo-com.svg'
import './Configuration.css'
import imgWhats from'../../images/whatsapp.svg'
import Message from '../../components/Message';
import QRCode from 'qrcode.react';
import { getUserPayment } from '../../slices/paymentsSlice';
import { Navigate } from 'react-router-dom';

const Configuration = () => {  
  const dispatch = useDispatch()

  const {user} = useSelector((state)=> state.user);
  const {user: userAuth} = useSelector((state) => state.auth);
  const {userPlan}  = useSelector((state) => state.userPlan); 
  const {plans} = useSelector((state)=> state.plans)
  const {payment} = useSelector((state)=> state.payment)
  const {configuration, loading, error, message, success} = useSelector((state) => state.configuration);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [groupMessage, setGroupMessage] = useState(false);
  const [selfMessage, setSelfMessage] = useState(false);
  const [sharedMessage, setSharedMessage] = useState(false);
  const [translateMessage, setTranslateMessage] = useState(false);
  const [saveMessage, setSaveMessage] = useState(false)
  const [onlyContactList,setOnlyContactList] = useState(false)
  const [contact, setContact] = useState("")
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  const [numberPhoneWhatsapp, setNumberPhoneWhatsapp] = useState("");
  const [qrCode, setQrCode] = useState("");
  
  useEffect(() => {        
    if(configuration?.isAuthenticate === false) 
      setInterval(() => dispatch(getUserConfigurations(userAuth._id)), 40000);
  }, [dispatch])  
  
  
  useEffect(() => { 
    dispatch(getUserConfigurations(userAuth._id))
    dispatch(getUserPayment())  
}, [])

useEffect(() => {
  if(configuration){
      setId(configuration._id)
      setTranslateMessage(configuration.translateMessage);
      setGroupMessage(configuration.groupMessage);
      setSelfMessage(configuration.selfMessage);
      setSharedMessage(configuration.sharedMessage);
      setSaveMessage(configuration.saveMessage);
      setOnlyContactList(configuration.onlyContactList);    
      setName(configuration.name)
      setNumberPhoneWhatsapp(configuration.numberPhoneWhatsapp)
      setQrCode(configuration.qrCode)
      setIsAuthenticate(configuration.isAuthenticate)
    }

  }, [configuration, dispatch]);


  const handleGroupMessage =(groupMessage)=>{
    setGroupMessage(groupMessage);
    setOnlyContactList(false);
  }
  const handleSelfMessage =(selfMessage)=>{
    setSelfMessage(selfMessage);
  }
  const handleTranslateMessage =(translateMessage)=>{
    setTranslateMessage(translateMessage);
  }
  const handleSharedMessage =(sharedMessage)=>{
    setSharedMessage(sharedMessage);
  }
  const handleSaveMessage =(saveMessage)=>{
    setSaveMessage(saveMessage);
  }
  const handleOnlyContactList =(onlyContactList)=>{
    setOnlyContactList(onlyContactList);
    setGroupMessage(false);
  }   
  const handleSubmit = async (e)=>{
    e.preventDefault();

    const newConfiguration ={
          _id:id,
          name,
          groupMessage,
          selfMessage,
          sharedMessage,
          translateMessage,
          numberPhoneWhatsapp,
          saveMessage,
          onlyContactList,
          qrCode,
          userId: user._id,
          userName: user.name,
    }
    await dispatch(updateConfiguration(newConfiguration));

    setTimeout(() => {
      dispatch(resetConfiguration());
    }, 5000);
  }
  const handleAddNumber = (e)=>{
    e.preventDefault();
    const newConfiguration ={
      id:id,
      contact:contact,
    }
    dispatch(addListContact(newConfiguration));
  }
  const handleDeleteNumber = (e)=>{
    e.preventDefault()
    const newConfiguration ={
      id:id,
      contact:e.target.id,
    }
    dispatch(deleteListContact(newConfiguration));
      }
  return (
    <div>
      <h1>C<span>onfiguração</span></h1>
      <p>Vamos configurar suas transcriçoes?</p>
      <em className={`tipo_plan ${userPlan.name}`} >{userPlan.name}</em>
      <div className="counter">
        <h4>Uso Hoje: {userPlan.usageChamadasAPI}/{plans.map((a)=>a._id === userPlan.planId && a.limiteChamadasAPI)}</h4>
        <h4>Uso Total: {userPlan.usageUse}/{plans.map((a)=>a._id === userPlan.planId && a.limiteUso)}</h4>
      </div>
      <form className='form-configuration' onSubmit={handleSubmit}>        
      <div className="text-container">
        <input type='text' placeholder='Nome para a configuração' required name='name' value={name ||""} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="text-container">
        <img className="imagemW" src={imgWhats} alt="whatsapp"/>
        <input type='number'  placeholder='(99)999999999' required disabled={configuration && configuration.numberPhoneWhatsapp ? 'disabled': ''} name='name' value={numberPhoneWhatsapp|| ""} onChange={(e)=>setNumberPhoneWhatsapp(e.target.value)}/>                        
      </div>
      <em className="required">*Este numero não poderá ser alterado mais tarde</em>
      <div className="slider-container">
        <label className="slider-label">Mensagens de grupos:</label>
        <Switch
          checked={groupMessage|| false}          
          onChange={handleGroupMessage}
          onColor="#25D366"
          offColor="#B2B2B2"
          handleDiameter={24}
          uncheckedIcon={false}
          checkedIcon={false}
          height={18}
          width={40}
          className="react-switch"
        />
      </div>
      <div className="slider-container">
        <label className="slider-label">Minhas próprias mensagens:</label>
        <Switch
          checked={selfMessage|| false}
          onChange={handleSelfMessage}
          onColor="#25D366"
          offColor="#B2B2B2"
          handleDiameter={24}
          uncheckedIcon={false}
          checkedIcon={false}
          height={18}
          width={40}
          className="react-switch"
        />
      </div>
      <div className="slider-container">
        <label className="slider-label">Mensagens compartilhadas:</label>
        <Switch
          checked={sharedMessage|| false}
          onChange={handleSharedMessage}
          onColor="#25D366"
          offColor="#B2B2B2"
          handleDiameter={24}
          uncheckedIcon={false}
          checkedIcon={false}
          height={18}
          width={40}
          className="react-switch"
        />
      </div>
      <div>
      <QRCode size={300}  renderAs='svg' value={qrCode} />
      <div>
      {isAuthenticate && <p style={{color:'green'}}>Autenticado</p>}
      {!isAuthenticate && <p style={{color:'red'}}>Não Autenticado</p>}
      </div>
      </div>
      {userPlan && userPlan.name === 'custom' &&
      (
      <>
        <div className="slider-container">
          <label className="slider-label">Traduzir mensagens:</label>
          <Switch
            checked={translateMessage|| false}
            onChange={handleTranslateMessage}
            onColor="#25D366"
            offColor="#B2B2B2"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            height={18}
            width={40}
            className="react-switch"
          />
        </div>
        <div className="slider-container">
          <label className="slider-label">Salvar mensagens:</label>
          <Switch
            checked={saveMessage|| false}
            onChange={handleSaveMessage}
            onColor="#25D366"
            offColor="#B2B2B2"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            height={18}
            width={40}
            className="react-switch"
          />
        </div>
        <p>Quer exclusividade para contatos? Insira os contatos que você deseja transcrever.</p>
        <div className="slider-container">
          <label className="slider-label">Somente contatos da lista:</label>
          <Switch
            checked={onlyContactList|| false}
            onChange={handleOnlyContactList}
            onColor="#25D366"
            offColor="#B2B2B2"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            height={18}
            width={40}
            className="react-switch"
          />
        </div>
        <div className={!onlyContactList ? 'list-contact hide' : ''}>
          <div className="text-container">        
          <img className="imagemW" src={imgWhats} alt="whatsapp"/>
          <input type='number' placeholder='(99)999999999' value={contact||""} onChange={(e)=>setContact(e.target.value)}></input>          
          <img src={imgPlus} className='list-btn' alt="plus" onClick={handleAddNumber}/>
          </div>     
          <div className="list-container">  
          {configuration && configuration.listContact && configuration.listContact.map((con) =>
          <li key={con} className='lista' id={con.toString()}>
            <input type='number' disabled value={con} id={con.toString()} ></input>   
              <img id={con.toString()} src={imgMinus} className='list-btn' alt="minus" onClick={handleDeleteNumber} />
          </li>)}
        </div>   
        </div>
      </>
      )}      
        {!loading && <input type='submit' name='Salvar' value='Salvar' />}
        {loading && <input type='submit' value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}
        {success && message && <Message msg={message} type="success"/>}  
        {payment && payment.status !== 'approved' &&  <Navigate to={`/user/payment/status/:id?collection_id=${payment.paymentId}&collection_status=${payment.status}&external_reference=${payment.planId}&payment_type=${payment.payment_type}&payment_id=${payment.paymentId}`} />}             
      </form>
      
    </div>
  )
}

export default Configuration;