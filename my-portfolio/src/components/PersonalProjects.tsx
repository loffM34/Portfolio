import "../styles/personalProjectsStyles.css";
import moolaLogo from "../resources/moolaLogo.png";
import tioliGameLogo from "../resources/TioliGameTempLogo.png";
import snakeLogo from "../resources/snakeLogo.png";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";

function PersonalProjects() {
  const [openProjectModal, setOpenModal] = useState(false);

  type Project = {
    name: string;
    desc: string;
    dependencies: string[];
  };

  let moola: Project = {
    name: "moola",
    desc: "Atomated Stock Trading React App",
    dependencies: ["React ", "MongoDB ", "ExpressJS ", "Python ", "Node.JS "],
  };

  let tioliGame: Project = {
    name: "Tioli Game",
    desc: "Poker Java Game",
    dependencies: ["Java ", "Javafx ", "SQL "],
  };

  let snake: Project = {
    name: "Snake Game",
    desc: "Classic Snake game",
    dependencies: ["HTML ", "JS ", "CSS "],
  };
  const projects = [moola, tioliGame, snake];

  return (
    <>
      <h1>Projects</h1>
      <div className="projectList">
        <ul>
          <li className="project">
            <div>
              <img src={moolaLogo} className="logo"></img>
              <h2 className="projectName">{projects[0].name}</h2>
              <p className="dependeciesList">
                {projects[0].dependencies.map((dependecy, index) => (
                  <span key={index} className="dependecy">
                    {dependecy}
                  </span>
                ))}
              </p>
            </div>
            <button
              className="learnMore"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <i className="bi bi-arrow-up-right-square-fill" />
            </button>
          </li>
          <li className="project">
            <div>
              <img src={tioliGameLogo} className="logo"></img>
              <h2 className="projectName">{projects[1].name}</h2>
              <p className="dependeciesList">
                {projects[1].dependencies.map((dependecy, index) => (
                  <span key={index} className="dependecy">
                    {dependecy}
                  </span>
                ))}
              </p>
            </div>
            <button
              className="learnMore"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <i className="bi bi-arrow-up-right-square-fill" />
            </button>
          </li>
          <li className="project">
            <div>
              <img src={snakeLogo} className="logo"></img>
              <h2 className="projectName">{projects[2].name}</h2>
              <p className="dependeciesList">
                {projects[2].dependencies.map((dependecy, index) => (
                  <span key={index} className="dependecy">
                    {dependecy}
                  </span>
                ))}
              </p>
            </div>
            <button
              className="learnMore"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <i className="bi bi-arrow-up-right-square-fill" />
            </button>
          </li>
        </ul>

        {openProjectModal && (
          <div>
            <ProjectModal setOpenModal={setOpenModal} />{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default PersonalProjects;
