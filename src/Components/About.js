import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <style>{`
        .SkillBox {
          display: flex;
          align-items: center;
          margin: 5px; /* Space between skill boxes */
        }

        .SkillBox span {
          margin-left: 5px; /* Space between icon and text */
          font-size: 1.2rem; /* Adjust size as needed */
        }
          
        .illutration {
          width: 300px; /* Adjust based on your layout */
        }

        .SkillsHeading {
          text-align: center;
          margin-top: 40px;
          font-size: 24px;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px; /* Space between skills */
        }
      `}</style>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Muhammad Nasar</b> and I am from Karachi,
            Pakistan. I'm a <b>Full Stack Developer</b> with a strong focus on
            AI-powered applications and an Advanced Diploma in{" "}
            <b>Software Engineering</b> from Aptech. <br />
            <br />I have completed an internship as a{" "}
            <b>Full Stack Developer</b> at Rehan Foundation and am currently
            working at <b>DIDx Inc</b>, where I contribute to innovative
            projects. I am passionate about building original applications with
            intuitive designs; you can explore some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations and opportunities where
            I can contribute and grow. Feel free to connect with me; links are
            in the footer.
            <br />
            Outside of coding, I enjoy photography. You can check out some of my
            shots here{" "}
            <a
              href="https://www.instagram.com/muhammad_.nasar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram.
            </a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="Python" />
        <Skills skill="React" />
        <Skills skill="JavaScript" />
        <Skills skill="Git" />
        <Skills skill="GitHub" />
        <Skills skill="Bootstrap" />
        <Skills skill="Postman" />
        <Skills skill="Django" />
        <Skills skill="MySQL" />
        <Skills skill="Linux" />
      </div>
    </>
  );
};

export default About;
