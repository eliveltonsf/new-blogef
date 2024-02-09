import React, { useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

import img5 from "../../img/05.png";
import alex from "../../img/alex.png";
import eli from "../../img/eli.png";

import { useParams } from "react-router-dom";
import api from "../../services/api";

const Post = () => {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const { idPost } = useParams();

  useEffect(() => {
    if (idPost) {
      api.get("/posts/" + idPost).then((res) => {
        setPost(res.data);

        api.get("/user/" + res.data.id_user).then((r) => setUser(r.data));
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <section className="container">
        <h6 className="uppercase color-primary text-center">{post.category}</h6>
        <h4 className="text-center">{post.title}</h4>

        <div className="flex-center my-3">
          <div className="profile">
            <img src={user.imageProfile} className="profile-img" alt="" />
          </div>
          <div className="ml-2">
            <h6 className="color-primary">
              {user.name} {user.surname}
            </h6>
            <h6 className="color-gray">{user.user}</h6>
          </div>
          <p className="ml-4">
            {post.date} - {post.duration}min
          </p>
        </div>

        <div className="img-banner hidden">
          <img src={post.imageUrl} alt="" />
        </div>

        <div className="row my-3">
          <h5>{post.title}</h5>
          <p>{post.content}</p>
        </div>

        <div className="row">
          <div className="grid-3 disappear"></div>
          <div className="grid-6 card">
            <div className="row">
              <div className="grid-3 flex-center pl-1">
                <div className="profile-big">
                  <img src={user.imageProfile} className="profile-img" alt="" />
                </div>
              </div>
              <div className="grid-9">
                <h6 className="color-primary">
                  {user.name} {user.surname}
                </h6>
                <h6 className="color-gray">{user.user}</h6>
                <p className="mt-1">{user.description}</p>
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
