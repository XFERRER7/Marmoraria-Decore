import './style/style-headerContent.css'

export const HeaderContent = () => {

  return (

    <div className="hero-section">
      <div className="hero-section-text">
        <h1 id="titulo-header">MARMORES SOB MEDIDA</h1>
      </div>
      <div className="contact-redirect">
        <a href="https://api.whatsapp.com/send?phone=5577998377782" target="_blank" id="button-contact-redirect"
          className="">Fazer orçamento</a>
      </div>
    </div>
  );
}