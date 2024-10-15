import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiDjango, SiMysql, SiLinux } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    Postman: <SiPostman />,
    React: <FaReact />,
    JavaScript: <DiJavascript1 />,
    Python: <FaPython />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Bootstrap: <FaBootstrap />,
    Django: <SiDjango />,
    MySQL: <SiMysql />,
    Linux: <SiLinux />,
    // Add any additional skills and icons as needed
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill] || <span>{skill}</span>}{" "}
      {/* Fallback to displaying the skill name if the icon is not found */}
      <span>{skill}</span> {/* Display the skill name next to the icon */}
    </div>
  );
};

export default Skills;
