import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

// ProjectBox Component with inline CSS styling
const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    CircleStudyDesc:
      "CircleStudy is a Django-based AI-powered platform where users can interact with bots for academic assistance. The platform integrates OpenAI and MySQL to manage queries effectively.",
    CircleStudyGithub: "",
    CircleStudyWebsite: "https://circlestudy.com/",

    DidxBotDesc:
      "This bot utilizes Flask, OpenAI, and the DIDx.com API. It aims to provide users with a convenient way to check their details and balance without needing to visit the website.",
    DidxBotGithub: "https://github.com/MuhammadNasarUddin/didx_bot.git",
    DidxBotWebsite: "",

    eLibraryDesc:
      "This is an online library where users can access multiple categories of books. After logging in, users can submit download requests, and upon admin approval, they can download the books.",
    eLibraryGithub: "https://github.com/MuhammadNasarUddin/elibrary.git",
    eLibraryWebsite: "",

    AiWhatsappBotDesc:
      "This bot is built using Flask and OpenAI, providing users with default tokens. With these tokens, users can access commands like image generation, translations, and voice messages.",
    AiWhatsappBotGithub:
      "https://github.com/MuhammadNasarUddin/AI_whatsapp_bot.git",
    AiWhatsappBotWebsite: "",
  };

  // Inline styling for the project boxes, images, and text handling
  const styles = {
    projectBox: {
      width: "300px",
      height: "400px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      margin: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },
    projectPhoto: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    projectTitle: {
      fontSize: "1.2rem",
      margin: "10px 0",
      textAlign: "center",
    },
    projectDescription: {
      fontSize: "1rem",
      marginBottom: "10px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 4, // Limits the description to 4 lines
      WebkitBoxOrient: "vertical",
    },
    projectButton: {
      display: "inline-block",
      backgroundColor: "#9067C6",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textAlign: "center",
      marginTop: "10px",
      width: "100%",
      marginBottom: "10px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.projectBox}>
      <img
        style={styles.projectPhoto}
        src={projectPhoto}
        alt="Project display"
      />
      <div>
        <h3 style={styles.projectTitle}>{projectName}</h3>
        <p style={styles.projectDescription}>{desc[projectName + "Desc"]}</p>

        {/* Conditionally show GitHub button if link is available */}
        {desc[projectName + "Github"] && (
          <a
            href={desc[projectName + "Github"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styles.projectButton}>
              <FaGithub /> GitHub
            </button>
          </a>
        )}

        {/* Conditionally show Website button if link is available */}
        {desc[projectName + "Website"] && (
          <a
            href={desc[projectName + "Website"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styles.projectButton}>
              <CgFileDocument /> Website
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
