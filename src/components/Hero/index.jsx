import blog from "../../svg/blog.svg";

const Hero = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <h1 className="h0">
              blogef<span>.</span>
            </h1>
            <p className="mt-1">
              Um blog para todos. Escrever. Ler. Comentar. Contribuir. Aprender.
              Conectar.
            </p>
            <a className="btn mt-4" href="">
              Começar a escrever
            </a>
          </div>
          <div className="grid-6 flex-center">
            <img src={blog} className="ilistation" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
