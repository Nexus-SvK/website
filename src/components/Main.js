import React from "react";
import "./Main.css";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Main(props) {
  return (
    <div className="section">
      <div id={props.id} className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-grid"><p><u>No projects created so far</u></p></div>
      </div>
      <div id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <p>
            <strong style={{color: "red"}}>Front-end:</strong> HTML, CSS, Javascript, React
          </p>
         <p><strong style={{color: "green"}}>Back-end:</strong> Node.js, Express.js, PHP</p>
         <p><strong style={{color: "blue"}}>Tools:</strong> Photoshop, Premiere, Ilustrator, Git, ffmpeg</p> 
        </div>
      </div>
      <div id="contact" className="contact">
        <h2>Contact</h2>
        <div className="contact-text">
          <p>
            Feel free to contact me at{" "}
            <strong>
              <a>mtjkapral@protonmail.com</a>
            </strong>
            .
          </p>
          <p>
            For viewing my source code from my portfolio projects you can also
            checkout my GitHub{" "}
            <strong>
              <a>@Nexus
              </a>
            </strong>
            .
          </p>
          <p>You can also find me on social networks:</p>
        </div>
      </div>
    </div>
  );
}
