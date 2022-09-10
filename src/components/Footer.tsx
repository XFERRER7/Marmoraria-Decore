import React from 'react'
import './style/style-footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="container-footer">

        <div className="footer-up">
          <div className="footer-a block-footer-up">
            <div id="img-footer"></div>
          </div>
          <div className="footer-b block-footer-up">
            <h4>Localização:</h4>
            <p className="footer-b-p">Luis Eduardo Magalhães</p>
            <p className="footer-b-p">Cidade universitária</p>
            <p className="footer-b-p">Avenida salvador</p>
            <p className="footer-b-p">Quadra 14</p>
            <p className="footer-b-p">Número 2458</p>
            <p className="footer-b-p">Lote 1</p>
          </div>
          <div className="footer-c block-footer-up">
            <ul className="footer-c-list">
              <li><a href="https://instagram.com/marmorariadecorelem?igshid=YmMyMTA2M2Y=" target="_blank"
                className="medias"><i className="fa fa-instagram"></i></a></li>
              <li><a href="mailto:marmorariadecore@hotmail.com.br" className="medias" target="_blank"><i
                className="fa-solid fa-envelope"></i></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100081112140465" className="medias" target="_blank"><i
                className="fa fa-facebook"></i></a></li>
            </ul>
          </div>
        </div>

        <div id="footer-sub">
          <p>Copyright &copy; Desenvolvido por <span>Alexandre Talles</span></p>
        </div>






      </div>
    </footer>

  )
}
