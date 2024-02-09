import img1 from "../../img/01.png";

const Card = ({ content }) => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <a href="">
            <img src={content.imageUrl} alt="" />
          </a>
        </div>
        <div className="mt-2 px-2">
          <h6 className="color-gray">{content.date}</h6>
          <h6 className="uppercase color-primary">{content.category}</h6>

          <h4>{content.title}</h4>
          <p className="mt-1">{content.resume}</p>
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
