import blogLogo2 from "svg/blog-logo2.svg";
import facebook from "svg/icon-facebook.svg";
import instagram from "svg/icon-instagram.svg";
import twitter from "svg/icon-twitter.svg";
import youtube from "svg/icon-youtube.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-section bt-black">
        <section className="container pb-0 pt-2">
          <div className="row flex-center">
            <img src={blogLogo2} className="icon-sm" alt="" />
          </div>

          <div className="row bb-black">
            <div className="grid-3">
              <h4>Posts</h4>
              <div className="flex-start-column mt-2">
                <a href="#" className="color-gray link-footer">
                  Mais vistos
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais comentados
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais populares
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais recentes
                </a>
              </div>
            </div>

            <div className="grid-3">
              <h4>Categorias</h4>
              <div className="flex-start-column mt-2">
                <a href="#" className="color-gray link-footer">
                  Tecnologia
                </a>
                <a href="#" className="color-gray link-footer">
                  Games
                </a>
                <a href="#" className="color-gray link-footer">
                  Fotografia
                </a>
                <a href="#" className="color-gray link-footer">
                  Cinema
                </a>
              </div>
            </div>

            <div className="grid-6">
              <h4 className="mb-2">
                Quer ser avisado dos novos posts do blog?
              </h4>
              <p>
                Fique de olho e acompanhe nosso blog, você não irá se
                arrepender.
              </p>
              <div className="flex-start-row mt-2">
                <input
                  type="text"
                  name="search"
                  id=""
                  placeholder="Digite seu e-mail aqui"
                />
                <button className="btn ml-2">Cadastrar</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="grid-9">
              <p>2023 | Todos os direitos reservados.</p>
            </div>
            <div className="grid-3">
              <img src={facebook} className="icon-link icon-s" alt="" />
              <img src={instagram} className="icon-link icon-s ml-2" alt="" />
              <img src={youtube} className="icon-link icon-s ml-2" alt="" />
              <img src={twitter} className="icon-link icon-s ml-2" alt="" />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
