import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header(props) {
  return <div className="header">
      <Navbar data={props.navbar}/>
      <div className="intro">
          <div className="title">
          <h1>Nexus</h1>
          </div>
        <p>Hi! I'm Matej a Newbie web developer.</p>
        <p>I have interest to create the flawless websites and apps and build them to perfection.</p>
      </div>
  </div>;
}
