import React, { useEffect } from 'react'
import { FcProcess,FcAudioFile,FcSettings,FcMultipleDevices,FcBullish } from "react-icons/fc";
import YouTube from 'react-youtube';
import imgAcessibility from '../../images/ear-with-hearing-aid.svg'
import imgRapidez from '../../images/alarm-clock.svg'
import imgConveniencia from '../../images/muted-speaker.svg'
import imgAlvo from '../../images/bullseye.svg'
import { Link } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import Plans from '../Plans/Plans';
import {  getAllTypesPlans } from '../../slices/plansSlice';
import { useDispatch, useSelector } from 'react-redux';



const Home = () => {
    
    const { width } = useWindowDimensions(); 
    const opts = {width: '100%'}

  return (
    <>
    <div className="titleh1">
        {/* <YouTube opts={opts} videoId={"me8M1MJkv30"} />          */}
        <h1>T<span>ranscrição de Áudio do WhatsApp em Texto</span></h1>
        <p>Nosso inovador serviço de transcrição de áudio do WhatsApp oferece uma solução perfeita para converter rapidamente seus arquivos de áudio em mensagens de texto de forma totalmente automatizada e personalizada. Com total configurabilidade, atendemos a todas as suas necessidades de transcrição com facilidade e eficiência.</p>
        <p>Através de uma integração com o poderoso serviço de transcrição do ChatGPT, utilizamos tecnologia avançada de reconhecimento de voz para transformar seus áudios do WhatsApp em texto com precisão e rapidez.</p>
        <p>Imagine estar em uma reunião ou em um ambiente público onde ouvir um áudio não é uma opção viável, mas você precisa responder a uma mensagem importante. Com o nosso serviço, você pode simplesmente fornecer o áudio do WhatsApp e receber o texto correspondente em segundos, permitindo que você se mantenha conectado e responda de forma conveniente, mesmo em situações desafiadoras.</p>
        <p>Além disso, você pode personalizar o serviço de acordo com suas preferências e necessidades individuais, tornando-o totalmente ajustável às suas exigências específicas.</p>
        <p>Experimente agora nosso serviço de transcrição de áudio do WhatsApp e desfrute da praticidade e eficiência de receber seus áudios na forma de texto, permitindo que você se comunique de maneira eficaz em qualquer situação.</p>        
    </div>
    <div>
        <div className="titleh2">
            <h2>B<span>enefícios do Serviço:</span></h2>
        </div>
        <div className={width <= 1000 ? 'smart' : 'beneficios'}>
        <li>
            <span>Rapidez:</span>
            <img src={imgRapidez} alt ="rapidez"/>  
            <p> A transcrição automatizada permite que você receba o texto do áudio em questão de segundos, economizando tempo valioso na digitação manual.</p>
        </li>
        <li>
            <span>Conveniência:</span>
            <img src={imgConveniencia} alt ="conveniencias"/>            
            <p>Em situações onde não é possível ou adequado ouvir um áudio, você pode facilmente obter o conteúdo em formato de texto e responder prontamente.</p>
        </li>
        <li>
            <span>Eficiência:</span>
            <FcProcess/>            
            <p>Com a transcrição automática, você pode lidar com várias mensagens de áudio simultaneamente, garantindo maior eficiência na comunicação.</p>
        </li>
        </div>
        <div className={width <= 1000 ? 'smart' : 'beneficios'}>
        <li>
            <span>Personalização:</span>
            <FcSettings/>            
            <p>O serviço é totalmente configurável e customizável, permitindo que você adapte a transcrição de acordo com suas preferências e necessidades específicas evitando gastos desnecessários.</p>
        </li>
        <li>
            <span>Acessibilidade:</span>            
            <img src={imgAcessibility} alt="acessibilidade"/>            
            <p>A transcrição em texto torna o conteúdo dos áudios acessível a pessoas com deficiência auditiva, promovendo inclusão na comunicação.</p>
        </li>
        <li>
            <span>Precisão:</span>
            <img src={imgAlvo} alt="precisao"/>            
            <p>Utilizando tecnologia avançada de reconhecimento de voz, o serviço oferece transcrições precisas e confiáveis.</p>
        </li>
        </div>
        <div className={width <= 1000 ? 'smart' : 'beneficios'}>
        <li>
            <span>Maior Produtividade:</span>
            <FcBullish/>            
            <p> Ao eliminar a tarefa manual de transcrição, você pode se concentrar em outras atividades importantes, aumentando sua produtividade.</p>
        </li>
        <li>
            <span>Flexibilidade:</span>
            <FcMultipleDevices/>            
            <p>O serviço pode ser utilizado em diferentes dispositivos e sistemas operacionais, garantindo flexibilidade de uso.</p>
        </li>
        <li>
            <span>Facilidade de Integração:</span>
            <FcAudioFile/>            
            <p> A integração com o serviço do ChatGPT torna a implementação do serviço simples e rápida.</p>
        </li>
        </div>        
    </div>
<Plans/>

<h3>Suporte e Contato:</h3>
<div className="suporte">
<h2>Em que podemos ajudar?</h2>


<p>Informações sobre produtos e serviços, Sugestão, Elogio, Reclamação e Denúncia.</p>
<p>(11)99109-7337 - Capitais e Regiões Metropolitanas (fixos e Celular) e Demais Localidades (Celular)</p>
<p><Link to={'mailto:lipe.dev@outlook.com.br'}>lipe.dev@outlook.com.br</Link></p>


<span>Horário de atendimento (exceto feriados):</span>
<p>Segunda à sexta, das 9h às 18h</p>

<p>Para registros via internet, <Link to='/alterarparafarmulario'>clique aqui.</Link></p>
<p>Soluções para o seu negócio.</p>
<p>Saiba mais</p>

<p>*Se houver uma seção de perguntas frequentes (FAQ), inclua-a para ajudar a esclarecer dúvidas comuns.**[CRIAR SESSÃO]</p>
</div>
<h3>Política de Privacidade e Segurança:</h3>
<p>Explique como os dados dos clientes serão tratados e garantir a segurança das informações fornecidas durante o processo de transcrição.</p>
    </>
  )
}

export default Home