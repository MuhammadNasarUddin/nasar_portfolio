import React from "react";
import ProjectBox from "./ProjectBox";
import CircleStudyImage from "../images/circleStudy.jpeg";
import DidxBot from "../images/didxBot.jpeg";
import elibrary from "../images/eLibrary.jpeg";
import AiWhatsappBot from "../images/AiWhatsappBot.jpeg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={CircleStudyImage} projectName="CircleStudy" />
        <ProjectBox projectPhoto={DidxBot} projectName="DidxBot" />
        <ProjectBox projectPhoto={elibrary} projectName="eLibrary" />
        <ProjectBox projectPhoto={AiWhatsappBot} projectName="AiWhatsappBot" />
      </div>
    </div>
  );
};

export default Projects;
