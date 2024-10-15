import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Muhammad Nasar</h4>
      <h4>Copyright &copy; 2024 Nasar</h4>
      <div className="footerLinks">
        <a href="https://github.com/MuhammadNasarUddin/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/muhammadnasar56" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:muhammadnasar012@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
