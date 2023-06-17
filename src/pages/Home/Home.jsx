import React from "react";
import Layout from "../../components/Layout/Layout";
import home from "../../assets/home.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "./style.scss";
const Home = () => {
  return (
    <Layout>
      <div className="home__container">
        <p>Do you have what it takes to become the React-Quiz master?</p>
        <img src={home} alt="react-quiz_img" className="home__img" />
        <Link to="/quiz">
          <Button color="purple">Start Quiz</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
