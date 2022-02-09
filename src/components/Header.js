import React from "react";
import { useRef } from "react/cjs/react.production.min";
import "./Header.css";

export default function Header(props) {
  return (
    <div id={props.id} className="header">
      <div className="intro">
        <h1>Nexus</h1>
        <p>Hi! I'm Matej a Newbie web developer.</p>
        <p>
          I have interest to create the flawless websites and apps and build
          them to perfection.
        </p>
      </div>
    </div>
  );
}
