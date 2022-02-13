import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";

export default function Main(props) {
  return (
    <div className="section">
      <div id={props.id[1].id} className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <p>
            <u>No projects created so far</u>
          </p>
        </div>
      </div>
      <div id={props.id[2].id} className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <p>
            <strong style={{ color: "red" }}>Front-end:</strong> HTML, CSS,
            Javascript, React
          </p>
          <p>
            <strong style={{ color: "green" }}>Back-end:</strong> Node.js,
            Express.js, PHP
          </p>
          <p>
            <strong style={{ color: "blue" }}>Tools:</strong> Photoshop,
            Premiere, Ilustrator, Git, ffmpeg
          </p>
        </div>
      </div>
      <div id={props.id[3].id} className="contact">
        <h2>Contact</h2>
        <div className="contact-text">
          <p>
            Feel free to contact me at <a href="mailto:mtjkapral@protonmail.com"><FontAwesomeIcon icon={faEnvelope} />mtjkapral@protonmail.com</a>
            .
          </p>
          <p>
            For viewing my source code from my portfolio projects you can also
            checkout my GitHub <a href="https://github.com/Nexus-SvK"><FontAwesomeIcon icon={faGithub} />@Nexus-SvK</a>
            .
          </p>
          <p>You can also find me on <a href="https://www.linkedin.com/in/matej-kapral-808645182/"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>.</p>
        </div>
      </div>
    </div>
  );
}
