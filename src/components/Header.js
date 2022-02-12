import React from "react";
import { useRef } from "react/cjs/react.production.min";
import "./Header.css";

export default function Header(props) {
  return (
    <div id={props.id} className="header">
      <div className="intro">
        <div class="container">
          <h1 class="glitch">
            <span aria-hidden="true">Nexus</span>
            Nexus
            <span aria-hidden="true">Nexus</span>
          </h1>
        </div>
        <p>Hi! I'm Matej a Junior web developer.</p>
        <p>
          I have interest to create the flawless websites and apps and build
          them to perfection.
        </p>
      </div>
    </div>
  );
}
