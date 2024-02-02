import img2 from "../../img/02.png";

const Banner = () => {
  return (
    <>
      {" "}
      <section className="container">
        <div className="img-banner flex-center hidden">
          <img src={img2} alt="" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray mt-3 text-center">13 MAI 2023</h6>
          <h6 className="uppercase color-primary text-center">tecnologia</h6>
          <h2 className="text-center">PC Gamer muito caro, o que fazer?</h2>
          <p className="mt-1 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.
          </p>
          <div className="my-3 flex-center">
            <a href="" className="link color-primary">
              Ler mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
