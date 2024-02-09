import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import logo from "../../svg//blog-logo2.svg";

const Login = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <div className="flex-center">
              <img src={logo} className="icon-l" alt="" />
            </div>
            <h5 className="text-center">Olá, faça o login para continuar.</h5>

            <form>
              <input
                type="text"
                name="user"
                className="mt-3"
                placeholder="Digite seu usuário"
                id=""
              />
              <input
                type="password"
                name="password"
                className="mt-2"
                placeholder="Digite sua senha"
                id=""
              />
              <button className="btn w-100 mt-3">Entrar</button>
            </form>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
