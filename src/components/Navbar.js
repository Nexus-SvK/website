import React, { useEffect } from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const Links = props.data.map((data) => (
    <a id={data.id} className="links" key={data}>
      {data.label}
    </a>
  ));
  return <div className="navigation">{Links}</div>;
}
