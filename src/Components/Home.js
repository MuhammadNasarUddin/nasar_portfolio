import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Muhammad Nasar</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I am passionate about transforming ideas into impactful websites and
            applications that enhance user experiences. I thrive on challenging
            projects that push my boundaries as a developer and work I can take
            pride in.
            <br />
            <br />I am proficient in <b>Python</b> and have experience with{" "}
            <b>Django</b> and
            <b> Flask</b>, currently focusing on projects in the{" "}
            <b>Full Stack</b> domain.
            <br />
            In the near future, I aim to deepen my knowledge in <b>Next.js </b>
            and <b>Machine Learning </b>.
            <br />
            <br />
            Additionally, I enjoy sipping <b>coffee</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>

        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
