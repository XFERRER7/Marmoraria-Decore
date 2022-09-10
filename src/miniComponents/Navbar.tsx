import './style/style-navbar.css' 

export const Navbar = () => {

  return (
    <div>
      <nav>
        <a className="logo" href="#">MARMORARIA <span id="decore">DECORE</span></a>
        <div id="menu-mobile" className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul id="list-nav" className="nav-list">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#section-a">Projetos</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  );
}