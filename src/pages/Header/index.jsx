import { Link } from "react-router-dom";
import blogLogo from "svg/blog-logo.svg";

const Header = () => {
  return (
    <>
      <header className="px-2 py-1">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={blogLogo} className="icon-s" alt="Logo" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="bx"></div>

        <div className="flex-start-row mr-3">
          <div className="search">
            <form className="flex" action="">
              <input type="text" name="search" placeholder="Buscar..." />
              <button className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop">
            <Link to="/login" className="btn ml-2">
              Login
            </Link>
          </div>

          <div className="cta-mobile">
            <Link to="login" className="link color-primary">
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/about" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 px-2">
              <form className="flex">
                <input type="text" name="search" placeholder="Buscar..." />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
