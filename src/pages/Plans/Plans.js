import React from 'react'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import imgplan1 from '../../images/plan1.jpg'
import imgplan2 from '../../images/plan2.jpg'
import imgplan3 from '../../images/plan3.jpg'
import imgplan4 from '../../images/plan4.jpg'
import './Plans.css'

const Plans = () => {
    const { width } = useWindowDimensions(); 
  return (
    <div>
    <div className="titleh1">
        <h1>P<span>reços e Planos:</span></h1>
        <p>Todos os nossos planos são recorrentes mensalmente, escolha o melhor plano que se enquadre ao seu perfil e ao seu bolso </p>
    </div>
    <div className={width <= 1000 ? 'smartplans' : 'plans'} style={{justifyContent:'center'}}>
        <li>
            <div className='pla'>
                <span>Free</span>
                <img src={imgplan4}alt="plan3"/>
                <p>Limite de 100 caracteres transcritos.</p>
                <p>Limite diário de 10 audios.</p>                  
                <p>Até 100 audios transcritos.</p>  
                <p>Use até acabar a frânquia.</p>
                <Link to={"/plans/64cc09f4031c07b9b573f828"}>
                    <button id="64cc09f4031c07b9b573f828" >Contratar</button>
                </Link>
            </div>            
        </li>
    </div>
    <div className={width <= 1000 ? 'smartplans' : 'plans'}>
        <li>
            <div className='pla'>
                <span>Básico</span>
                <img src={imgplan1}alt="plan1"/>
                <h3 className='sh3'>R$<span>4,90</span></h3>
                <p>Limite de 300 caracteres transcritos.</p>
                <p>Limite diário de 20 audios.</p>                  
                <p>Até 600 audios transcritos.</p> 
                <p>Customização basica de transcrição.</p>  
                <p>Use até acabar a frânquia.</p>           
                <Link to={"/plans/64c28f032726faa5d8f35584"}>
                    <button id="64c28f032726faa5d8f35584" >Contratar</button>
                </Link>                
            </div>            
        </li>
        <li>
            <div className='pla'>
                <span>Plus</span>
                <img src={imgplan2}alt="plan2"/>
                <h3 className='sh3'>R$<span>9,90</span></h3>
                <p>Limite de 800 caracteres transcritos.</p>
                <p>Limite diário de 35 audios.</p>                  
                <p>Até 1200 audios transcritos.</p> 
                <p>Customização de lista de contatos para transcrição dos audios.</p>             
                <Link to={"/plans/64c28f292726faa5d8f35585"}>
                    <button id="64c28f292726faa5d8f35585">Contratar</button>
                </Link>
            </div>            
        </li>
        <li>
            <div className='pla'>
                <span>Custom</span>
                <img src={imgplan3}alt="plan3"/>
                <h3 className='sh3'>R$<span>19,90</span></h3>
                <p>Limite de 4096 caracteres transcritos.</p>
                <p>Limite diário de 100 audios.</p>                  
                <p>Até 3200 audios transcritos.</p> 
                <p>Customização de gerenciamento dos audios.</p> 
                <p>Tradução simultânea de qualquer<Link to={'/howitworks#idiomas'} style={{color:'black',fontWeight:'normal',textDecoration:'underline'}}>idioma suportado</Link>.</p>
                <p>Recursos adicionais:</p>
                <p>Pauta de grupo</p>
                <p>Gerador de imagens</p>
                <Link to={"/plans/64c28f402726faa5d8f35586"}>
                    <button id="64c28f402726faa5d8f35586" >Contratar</button>
                </Link>
            </div>            
        </li>
    </div>      
</div>
  )
}

export default Plans