import './Auth.css';

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { resetPassword, reset } from "../../slices/authSlice";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const { loading, error, message } = useSelector((state) => state.auth);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = {
        email
      };
      await dispatch(resetPassword(user));    
    };
  
    // Clean all auth states
    useEffect(() => {
      dispatch(reset());
    }, [dispatch]);
  
  return (
    <div id="login">
        <h1>E<span>squeci a senha</span></h1>
      <p className='subtitle'>Enviaremos um token de acesso para o seu email.</p>      
      <form onSubmit={handleSubmit}>        
        <div className="conversation">
          <div className="message received">
            <input type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} value={email || ""}/>                  
          </div>                      
        </div>  
        <div className='submitDiv'>
        {!loading && <input type='submit' value="Enviar"/>}
        {loading && <input type='submit' value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}        
        {message && <Message msg={message} type="success" />}
        </div>
      </form>       
      <p>
        Ainda não tem conta ? <Link to="/register">Clique aqui!</Link>
      </p>  
    </div>

  )
}

export default ForgotPassword