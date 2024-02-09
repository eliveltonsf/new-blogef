import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import blog from "../../svg/blog.svg";

const About = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <h1 className="h0">
              blogef<span>.</span>
            </h1>
            <p className="mt-1">
              O Blog é um projeto desenvolvido em React.js usando uma estilo de
              personalização proprio usando Sass
            </p>
            <a className="btn mt-4" href="">
              Saber mais
            </a>
          </div>
          <div className="grid-6">
            <img className="blog-logo" src={blog} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
