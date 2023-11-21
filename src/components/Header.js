import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";

import { logout, reset } from "../slices/authSlice";
import  {resetUserPlan} from '../slices/plansSlice'
import { resetConfiguration } from '../slices/configurationSlice';
import imgLogoZap from '../images/whatsapp-white.svg'
import imgHome from '../images/home.svg'
import useWindowDimensions from '../hooks/useWindowDimensions';


const Header = () => {
  const{ auth} = useAuth()  
  const { width } = useWindowDimensions();  

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetUserPlan());
    dispatch(resetConfiguration());
    navigate("/login");
  };
  
  return (
    <header className={width < 600 ? 'smart-header' : '' }>        
        <NavLink to='/'><h1><img className='logo' src={imgLogoZap} alt='logoZap'/>TraduzApp</h1></NavLink>
        <div>
        <nav>
        <NavLink to='/'><img className='logo' src={imgHome} alt='logoZap'/></NavLink>
        <NavLink to='/plans'>Planos</NavLink>
        <NavLink to='/howitworks'>Entenda</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        {auth ? (
          <>   
            {/* {user && (
                <NavLink to={`/users/${user._id}`}>
                  POSTAR
                </NavLink>
            )} */}
              {/* <NavLink to="/profile">
                PROFILE              
                </NavLink> */}
              <span  onClick={handleLogout}>Sair</span>
          </>
        ) : (
          <>
            {" "}
              <NavLink to="/login">Entrar</NavLink>
              <NavLink to="/register">Cadastrar</NavLink>
          </>
        )}        
    </nav>
    </div>
      </header> 
  )
}

export default Header