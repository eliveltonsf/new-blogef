import img1 from "../../img/01.png";

const Card = () => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <a href="">
            <img src={img1} alt="" />
          </a>
        </div>
        <div className="mt-2 px-2">
          <h6 className="color-gray">14 MAI 2023</h6>
          <h6 className="uppercase color-primary">tecnologia</h6>

          <h4>PC Gamer muito caro, o que fazer?</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.
          </p>
          <div className="my-3">
            <a href="" className="link color-primary">
              Ler mais
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
