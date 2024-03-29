import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

const Main = ({ content }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (content) {
      api.get(`user/${content.id_user}`).then((res) => setUser(res.data));
    }
  }, []);

  return (
    <>
      <div className="py-3 bb-black">
        <h6 className="color-gray">{content.date}</h6>
        <h6 className="uppercase color-primary">{content.category}</h6>

        <Link to={"/post/" + content.id} className="link-title">
          <h4>{content.title}</h4>
        </Link>

        <p className="mt-1">{content.resume}</p>
        <div className="flex-start-row mt-3">
          <div className="profile">
            <img src={user.imageProfile} className="profile-img" alt="" />
          </div>
          <div className="ml-1">
            <h6 className="color-primary">
              {user.name} {user.surname}
            </h6>
            <h6 className="color-gray">{user.user}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
