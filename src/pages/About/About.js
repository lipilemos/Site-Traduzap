import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className="titleh1">
                <p>Bem-vindo ao TraduzApp, a solução completa para transcrever áudios do WhatsApp em texto e traduzir mensagens em tempo real! Simplificamos a comunicação, permitindo que você entenda e responda a mensagens de voz de maneira eficiente. Com TraduzApp, você nunca mais perderá uma conversa importante!</p>
                <h1>O <span>que o TraduzApp oferece:</span></h1>
            </div>
            <div className="titleh2">
                <h2>T<span>ranscrição de Áudios do WhatsApp:</span></h2>
            </div>
            <p>Converta mensagens de voz do WhatsApp em texto.</p>
            <p>Leia e compreenda as mensagens de áudio com facilidade.</p>
            <p>Nunca mais se preocupe com a dificuldade de ouvir mensagens em ambientes barulhentos ou inconvenientes.</p>


            <div className="titleh2">
                <h2>T<span>radução de Textos em Tempo Real:</span></h2>
            </div>
            <p>Traduza mensagens de texto para qualquer idioma que você preferir.</p>
            <p>Comunique-se facilmente com pessoas de todo o mundo.</p>
            <p>A tradução é feita em tempo real, tornando as conversas mais suaves e acessíveis.</p>

            <div className="titleh2">
                <h2>P<span>lanos Flexíveis:</span></h2>
            </div>
            <div className="titleh3">
                <h3>E<span>scolha o plano que melhor se adapte às suas necessidades:</span></h3>
            </div>            
                <p><Link className='link' to="/plans"><span>C</span>onsulte os planos disponíveis</Link></p>                
            <div className="titleh2">
                <h2>C<span>omo Funciona:</span></h2>
            </div>
            <div className='about'>
                <p><span>Crie sua Conta:</span> <Link className='link' to="/register">Cadastre-se </Link> e crie uma conta no Traduzap.</p>
                <p><span>Escolha seu Plano:</span> Selecione o <Link className='link' to="/plans">plano</Link> que melhor atende às suas necessidades.</p>
                <p><span>Efetue o Pagamento:</span> Complete o processo de pagamento de forma segura e rápida pelo MercadoPago.</p>
                <p><span>Ative seu Plano:</span> Assim que o pagamento for confirmado, seu plano será ativado.</p>
                <p><span>Configuração Personalizada:</span> Acesse a página de configurações para escanear o QRcode do WhatsApp e definir suas preferências de transcrição.<em style={{color: "black"}}>(Ah, você precisará estar em outro aparelho para escanear o QRCode e concluir essa etapa.)</em></p>
            </div>
            <div className='tradu'>
                <p>O TraduzApp é a ferramenta definitiva para melhorar sua experiência de comunicação no WhatsApp. Comece hoje e descubra como é fácil acompanhar e entender todas as mensagens de áudio e texto em qualquer idioma.</p>
                <p>Não perca mais tempo tentando decifrar mensagens de voz e lidando com barreiras linguísticas. O TraduzApp está aqui para tornar sua comunicação mais eficiente e eficaz.</p>
                <p>Pronto para experimentar o TraduzApp? <Link className='link' to="/register">Crie sua conta</Link> agora e escolha o plano perfeito para você!</p>
            </div>
        </div>
    )
}

export default About