import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { uploads } from '../../utils/config';

import './MyUser.css'
import imgPerson from '../../images/bust-in-silhouette.svg'
import imgConfig from '../../images/gear.svg'
import { getUserPlans } from '../../slices/plansSlice';

const MyUser = () => {

  const { auth } = useAuth()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { user: useer}= useSelector((state) => state.user);

  useEffect(() => {    
      dispatch(getUserPlans(user._id));
  }, []);

  return (
    <div>
      {auth ? (
        <>
          {user && (
            <li className="list" key={user._id} >              
            {user.profileImage ? 
                <img className="image" src={`${uploads}/users/${user.profileImage}`} alt={user.name} />                
                :
                <img className="image" src={`${uploads}/users/${useer.profileImage}`} alt={user.name} />                
            }
              <div className="txtmyuser">
                <NavLink className="person" to={`/users/${user._id}`}>
                  <img className="person" src={imgPerson} alt="perfil" />
                </NavLink>
                <NavLink className="person" to={`/users/config/${user._id}`}>
                  <img className="person" src={imgConfig} alt="config" />
                </NavLink>
              </div>
            </li>
          )}
        </>
      ) : (
        <>
          {" "}
          <NavLink to="/login">Entrar</NavLink>
          <NavLink to="/register">Cadastrar</NavLink>
        </>
      )}
    </div>
  )
}

export default MyUser