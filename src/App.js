import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
//hooks
import useWindowDimensions from './hooks/useWindowDimensions';
import { useAuth } from './hooks/useAuth';

//components
import LastUsers from './components/LastUsers';
import MyUser from './components/MyUser/MyUser';
import Header from './components/Header';
//pages
import Home from './pages/Home/Home';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import EditProfile from './pages/EditProfile/EditProfile';
import Configuration from './pages/Configuration/Configuration';
import Plans from './pages/Plans/Plans';
import PlansDetails from './pages/PlansDetails/PlansDetails';
import Payments from './pages/Payment/Payments';
import PaymentStatus from './pages/Payment/PaymentStatus';
import Error from './pages/Error/Error';
//images
import avatar1 from './avatar/p1.jpg';
import avatar2 from './avatar/p2.jpg';
import avatar3 from './avatar/p3.jpg';
import avatar4 from './avatar/p4.jpg';
import avatar5 from './avatar/p5.jpg';
import avatar6 from './avatar/p6.jpg';
import avatar7 from './avatar/p7.jpg';
import { useEffect } from 'react';
import { getAllTypesPlans } from './slices/typesPlansSlice';
import About from './pages/About/About';


const users = [{name : "Antonio Carlos",comment: "Eu aprendi como usar agora", avatar: avatar1},
{name : "Joice",comment: "Testando esse novo recurso...", avatar: avatar2},
{name : "Camila",comment: "Que Otimo!", avatar: avatar3},
{name : "Cleber",comment: "Já usou esse novo recurso no zap? ", avatar: avatar4},
{name : "André",comment: "Nunca mais vou escutar um audio haha...", avatar: avatar5},
{name : "Junior",comment: "Nossa isso foi muito bom!", avatar: avatar6},
{name : "Guilherme",comment: "Cara ficou demais, como posso fazer?", avatar: avatar7}
];

function App() { 
  const { width } = useWindowDimensions();  
  const { loading, auth } = useAuth();
  const { user } = useSelector((state) => state.auth);  
  const { plans } = useSelector((state) => state.plans);  
  const { userPlan } = useSelector((state) => state.userPlan);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getAllTypesPlans());
  }, [dispatch]);

  const handleSubmit = ((e) =>  {
    e.preventDefault();

  })
  if(loading)
  {
    return <p>Carregando...</p>
  }
  return (
    <div className="App">
    <BrowserRouter>             
      <Header/>
      {auth && (
      <>
        {user &&
          <div className={`user-menu ${width >= 1000 ? 'hidden' :''}`}>
            <MyUser/>
          </div>
        }
      </>
      )}
      <div className='page'>        
        <div className={`last-users ${width <= 1000 ? 'hidden' :''}`}>        
          <ul>    
            {user &&        
          <MyUser/>}
            <LastUsers users={users}/>
          </ul>
        </div>
        
        <div className="container">
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/howitworks' element={<HowItWorks/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='/plans' element={<Plans/>}/>
          <Route path='/plans/:id' element={<PlansDetails/>}/>
          <Route path='/' element={auth ? <Home/> : <Login/>} />            
          <Route path='/login' element={!auth ? <Login/> : <Navigate to='/' />}/>
          <Route path='/register' element={!auth ? <Register/> : <Navigate to='/' />} />         
          <Route path='/user/payment/status/:id' element={auth ? <PaymentStatus/> : <Login/>} />
          <Route path='/user/payment/:id' element={auth ? <Payments/> : <Login/>} />
          <Route path='/users/config/:id' element={auth && userPlan ? <Configuration /> : <Navigate to='/plans' />}/>           
          <Route path='/users/:id' element={auth ? <EditProfile /> : <Navigate to='/login' />} />
          <Route path='/about' element={<About/>}/>
          </Routes>
          </div>
      </div>  
          </BrowserRouter>  
      <div className={`message-box ${width <= 1000 ? 'hidden' : ''}`}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite sua mensagem"/>
        </form>
      </div>
    </div>
  );
}

export default App;
