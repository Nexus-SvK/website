import React from "react";
import "./Main.css";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Main(props) {
  return (
    <div id={props.id} className="section">
      <div id="skills" className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-grid"></div>
      </div>
      <div id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-list"></div>
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
              <a>
                <i class="fab fa-github-square"></i>@Nexus
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
