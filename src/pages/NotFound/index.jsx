import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import logo from "../../svg/blog-logo2.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <div className="row flex-center">
          <img src={logo} className="icon-l" alt="" />
        </div>

        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <h1 className="h0 color-primary text-center">404</h1>
            <h5 className="text-center">Página não encontrada!</h5>
            <p className="text-center mt-1">
              A página que você tá procurando não existe ou foi removida. Clique
              para voltar para o site.
            </p>
            <Link to="/" className="btn text-center w-100 mt-3">
              Voltar p/Home
            </Link>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
