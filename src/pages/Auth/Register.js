import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { register, reset } from "../../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);

    dispatch(register(user));
  };

  // Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id='register'>
      <h1>R<span>egistrar</span></h1>
      <p className='subtitle'>Cadastre-se para começar a receber seus audios em texto também.</p>
      <form onSubmit={handleSubmit}>
      <div className="conversation">
          <div className="message received">
          <input type='text' placeholder='Nome' onChange={(e)=>{setName(e.target.value)}} value={name || ""}/>
          </div>
          <div className="message sent">
          <input type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} value={email || ""}/>
              <span className="metadata">
                  <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
              </span>
          </div>                
          <div className="message received">
          <input type='password' placeholder='Senha' onChange={(e)=>{setPassword(e.target.value)}} value={password || ""}/>
          </div>
          <div className="message sent">
          <input type='password' placeholder='Confirme sua senha' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword || ""}/>
              <span className="metadata">
                  <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
              </span>
          </div>                
        </div>  
        <div className='submitDiv'>
        {!loading && <input type='submit' value="Cadastrar"/>}
        {loading && <input type='submit' value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}
        </div>        
      </form>
      <p>
        Já tem uma conta ? <Link to="/login">Clique aqui!</Link>
      </p>
    </div>
  )
}

export default Register