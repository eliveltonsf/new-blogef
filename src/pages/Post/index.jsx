import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import img5 from "../../img/05.png";
import alex from "../../img/alex.png";
import eli from "../../img/eli.png";

const Post = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <h6 className="uppercase color-primary text-center">games</h6>
        <h4 className="text-center">O que tem de novo no PS5??</h4>

        <div className="flex-center my-3">
          <div className="profile">
            <img src={alex} className="profile-img" alt="" />
          </div>
          <div className="ml-2">
            <h6 className="color-primary">Alex Fushi</h6>
            <h6 className="color-gray">Autor</h6>
          </div>
          <p className="ml-4">Mai 14,2023 - 8 min read</p>
        </div>

        <div className="img-banner hidden">
          <img src={img5} alt="" />
        </div>

        <div className="row my-3">
          <h5>Esse aqui é o primeiro título</h5>
          <p>
            🎮 Dê asas à sua imaginação e mergulhe em uma aventura épica com o
            mais recente lançamento para o PS5! Prepare-se para uma experiência
            de jogo incomparável, onde gráficos deslumbrantes e jogabilidade
            envolvente se fundem para criar um mundo totalmente imersivo. 🌟
            Descubra cenários deslumbrantes, enfrente desafios emocionantes e
            desvende mistérios profundos enquanto você assume o controle de
            personagens incríveis. 🚀 Prepare-se para a ação, porque este jogo
            promete levar você a uma jornada inesquecível! 🎉 Disponível agora
            exclusivamente para PlayStation 5. Não perca!
          </p>
        </div>

        <div className="row">
          <div className="grid-3 disappear"></div>
          <div className="grid-6 card">
            <div className="row">
              <div className="grid-3 flex-center pl-1">
                <div className="profile-big">
                  <img src={eli} className="profile-img" alt="" />
                </div>
              </div>
              <div className="grid-9">
                <h6 className="color-primary">Eli Ferreira</h6>
                <h6 className="color-gray">Autor</h6>
                <p className="mt-1">
                  Junte-se a mim e embarque nessa aventura, onde a magia do
                  entretenimento ganha vida no mundo dos jogos. 🚀 #AtorDeJogos
                  #ExperiênciaÚnica #EmoçõesVirtuais"
                </p>
              </div>
            </div>
          </div>
          <div className="grid-3 disappear"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Post;
