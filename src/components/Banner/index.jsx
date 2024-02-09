import img2 from "../../img/02.png";

import { Link } from "react-router-dom";

const Banner = ({ content }) => {
  return (
    <>
      {" "}
      <section className="container">
        <div className="img-banner flex-center hidden">
          <img src={content.imageUrl} alt="" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray mt-3 text-center">{content.date}</h6>
          <h6 className="uppercase color-primary text-center">
            {content.category}
          </h6>
          <Link to={"/post/" + content.id} className="link-title">
            <h2 className="text-center">{content.title}</h2>
          </Link>

          <p className="mt-1 text-center">{content.resume}</p>
          <div className="my-3 flex-center">
            <Link to={"/post/" + content.id} className="link color-primary">
              Ler mais
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
