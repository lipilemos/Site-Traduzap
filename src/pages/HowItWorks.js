import imgSond from '../images/speaking-head.svg'
import imgText from '../images/speech-balloon.svg'
import imgTranslate from '../images/japanese-service-charge-button.svg'
import imgAmericas from '../images/globe-showing-americas.svg'
import imgEuropa from '../images/globe-showing-europe-africa.svg'
import imgSync from '../images/counterclockwise-arrows-button.svg'
import imgConfia from '../images/handshake.svg'
import imgPlay from '../images/play-48-filled.svg'
import imgProfile from '../avatar/p1.jpg'

import useWindowDimensions from '../hooks/useWindowDimensions'

const HowItWorks = () => {
const {width} = useWindowDimensions();
    
  return (
    <div className={width <= 1000 ? 'howsmart' : 'how'} id="idiomas">
        <h1>C<span>omo Funciona:</span></h1>
        <div>
            <div className="conversation" >
                <div className="message received">
                    <h3>Conversão de fala 
                        <img src={imgSond} alt="song"/> 
                            em texto 
                        <img src={imgText} alt="text"/>
                    </h3>
                    {/* <div className="voice-duration">
                                <span>0:37</span>
                            </div> */}
                </div>
                <div className="message received">
                    <div className="voice-message">
                        <div className="avatar">
                            <img src={imgPlay} alt="Avatar"/>
                        </div>
                        <div className="message-content">
                            <hr/>
                            <div className="voice-icon">
                                <img src={imgProfile} alt="Voice Message Icon"/>
                            </div>
                            <div className="voice-duration">
                                <span>0:37</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message sent">
                    A API de fala para texto fornece dois pontos de extremidades e, com base em nosso modelo de Whisper large-v2 de código aberto de última geração. Eles podem ser usados para: transcrições e traduções
                    Transcreva o áudio para qualquer idioma em que o áudio esteja.
                    Traduzir e transcrever o áudio para o inglês.
                    (Atualmente, os uploads de arquivos estão limitados a 25 MB)
                    <span className="metadata">
                        <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
                    </span>
                </div>     
            <div className="message received" >
                <img src={imgSond} alt="song"/>
                    <h3>&nbsp;Transcrições&nbsp;</h3>            
                <img src={imgText} alt="text"/>
            </div>
            <div className="message sent">
                A API de transcrições toma como entrada o arquivo de áudio que você deseja transcrever e o formato de arquivo de saída desejado para a transcrição do áudio. Atualmente, suportamos vários formatos de arquivo de entrada e saída.
                <span className="metadata">
                    <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
                </span>
            </div>  
            <div className="message received" >
                <img src={imgSond} alt="song"/>
                    <h3>&nbsp;Traduções&nbsp;</h3>            
                <img src={imgTranslate} alt="translate"/>
            </div>
            <div className="message sent">
            A API de traduções toma como entrada o arquivo de áudio em qualquer um dos idiomas suportados e transcreve, se necessário, o áudio para o inglês. Isso difere do nosso ponto de extremidade /Transcrições, uma vez que a saída não está no idioma de entrada original e, em vez disso, é traduzida para o texto em inglês.
                <span className="metadata">
                    <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
                </span>
            </div>  
            <div className="message received">
                <img src={imgAmericas} alt="america"/>
                    <h3>&nbsp;Idiomas suportados&nbsp;</h3>
                <img src={imgEuropa} alt='europas'/>            
            </div>
        <div className="message received">
            Atualmente, oferecemos suporte aos seguintes idiomas:       
        </div>
        <div className="message sent">            
            Africâner, árabe, armênio, azeri, bielorrusso, bósnio, búlgaro, catalão, chinês, croata, checo, dinamarquês, holandês, inglês, estónio, finlandês, francês, galego, alemão, grego, hebraico, hindi, húngaro, islandês, indonésio, italiano, japonês, kannada, cazaque, coreano, letão, lituano, macedónio, malaio, marathi, maori, nepalês, norueguês, persa, polaco, português, romeno, russo, sérvio, eslovaco, esloveno, espanhol, suaíli, sueco, tagalo, tâmil, tailandês, turco, ucraniano, Urdu, vietnamita e galês.Embora o modelo subjacente tenha sido treinado em 98 idiomas, listamos apenas os idiomas que excederam -50% de taxa de erro de palavras (WER), que é uma referência padrão da indústria para a precisão do modelo de fala para texto. O modelo retornará resultados para idiomas não listados acima, mas a qualidade será baixa.
            <span className="metadata">
                <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
            </span>
        </div>  
        <div className="message received">
            <h3>Audios mais longos</h3>
        </div> 
        <div className="message sent">            
            Por padrão, a API Whisper só oferece suporte a arquivos com menos de 25 MB. Se você tiver um arquivo de áudio maior do que isso, será necessário dividi-lo em blocos de 25 MB ou menos ou usar um formato de áudio compactado. Para obter o melhor desempenho, sugerimos que você evite quebrar o áudio no meio da frase, pois isso pode fazer com que algum contexto seja perdido.Uma maneira de lidar com isso é usar o pacote Python de código aberto PyDub para dividir o áudio: A OpenAI não oferece garantias sobre a usabilidade ou segurança de softwares 3rd party como o PyDub.
            <span className="metadata">
                <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
            </span>
        </div> 
        <div className="message received">
            <h3>Solicitações&nbsp;</h3>
            <img src={imgSync} alt='sync'/>                
        </div>  
        <div className="message sent">            
        Nós usamos um prompt para melhorar a qualidade das transcrições geradas pela API do Whisper. O modelo tentará corresponder ao estilo do prompt, portanto, será mais provável que ele use maiúsculas e pontuação se o prompt também o fizer. No entanto, o sistema de prompting atual é muito mais limitado do que nossos outros modelos de linguagem e fornece apenas controle limitado sobre o áudio gerado. Aqui estão alguns exemplos de como o prompting pode ajudar em diferentes cenários:
        Os prompts podem ser muito úteis para corrigir palavras ou siglas específicas que o modelo muitas vezes reconhece erroneamente no áudio.
        Por exemplo, o prompt a seguir melhora a transcrição das palavras DALL·E e GPT-3, que foram anteriormente escritos como "PIB 3" e "DALI": "A transcrição é sobre OpenAI que faz tecnologia como DALL·E, GPT-3 e ChatGPT com a esperança de um dia construir um sistema AGI que beneficie toda a humanidade"
        Para preservar o contexto de um arquivo que foi dividido em segmentos, você pode solicitar ao modelo a transcrição do segmento anterior. Isso tornará a transcrição mais precisa, pois o modelo usará as informações relevantes do áudio anterior. O modelo só considerará os 224 tokens finais do prompt e ignorará qualquer coisa anterior.
        Para entradas multilíngues, o Whisper usa um tokenizador personalizado. Para entradas somente em inglês, ele usa o tokenizador GPT-2 padrão, que são acessíveis por meio do pacote Whisper Python de código aberto.
        Às vezes, o modelo pode ignorar a pontuação na transcrição. Você pode evitar isso usando um prompt simples que inclui pontuação: "Olá, bem-vindo à minha palestra".
        O modelo também pode deixar de fora palavras de preenchimento comuns no áudio. Se você quiser manter as palavras de preenchimento em sua transcrição, você pode usar um prompt que as contém: "hum, deixe-me pensar como, hmm... Ok, aqui está o que eu estou, tipo, pensando."
        Alguns idiomas podem ser escritos de diferentes maneiras, como chinês simplificado ou tradicional. O modelo pode nem sempre usar o estilo de escrita desejado para sua transcrição por padrão. Você pode melhorar isso usando um prompt no seu estilo de escrita preferido.
            <span className="metadata">
                <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
            </span>
        </div> 
        <div className="message received">
        <h3>Melhorando a confiabilidade</h3>
            <img src={imgConfia} alt='sync'/>                
        </div>  
        <div className="message sent">            
        Como exploramos na seção de prompting, um dos desafios mais comuns enfrentados ao usar o Whisper é que o modelo muitas vezes não reconhece palavras ou siglas incomuns. Para resolver isso, destacamos diferentes técnicas que melhoram a confiabilidade do Whisper nesses casos:
            <span className="metadata">
                <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
            </span>
        </div> 
    </div>
    </div>
    </div>
  )
}

export default HowItWorks