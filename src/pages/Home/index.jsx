import React, { useState, useEffect } from "react";

import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Main from "../../components/Main";

import iconStar from "../../svg/icon-star.svg";

import api from "../../services/api";

const Home = () => {
  const [main, setMain] = useState([]);
  const [mostSeen, setMostSeen] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    api
      .get("/posts?star=5&_limit=2&_sort=-id")
      .then((res) => {
        setMain(res.data);
      })
      .catch();

    api
      .get("posts?_limit=1&_sort=-id,date")
      .then((res) => {
        setBanner(res.data);
      })
      .catch();

    api
      .get("/posts?_limit=3")
      .then((res) => {
        setMostSeen(res.data);
      })
      .catch();
  }, []);

  return (
    <>
      <Hero></Hero>

      <section className="container">
        <div className="row">
          <div className="grid-6">
            <img src={iconStar} className="icon-l" alt="" />

            <h3 className="mt-2">
              Os Melhores e mais bem votados posts do mês.
            </h3>

            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
          </div>
          <div className="grid-6">
            {main.map((item) => (
              <Main key={item.id} content={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <h3>Post com mais visitas</h3>
        <p className="mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque.
        </p>

        <div className="row">
          <Card />

          <Card />

          <Card />
        </div>
      </section>

      <Banner />
    </>
  );
};

export default Home;
