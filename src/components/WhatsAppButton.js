
import imgWhats  from '../images/whatsapp.svg'

const WhatsAppButton = () => {
    const handleOpenWhatsApp = () => {
      window.open('https://wa.me/554888653057', '_blank');
    };
  
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000'
        }}
      >
        <button style={{backgroundColor: 'transparent'}} onClick={handleOpenWhatsApp}>
          <img 
            src={imgWhats}
            alt="WhatsApp"
            style={{ width: '50px', height: '50px' }}
          />
        </button>
      </div>
    );
  };
  
  export default WhatsAppButton;