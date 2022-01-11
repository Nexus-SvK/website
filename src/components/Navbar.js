import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const Links = props.data.map((data) => (
    <a className="links" /*href={data}*/>{data}</a>
  ));
  return <div className="navigation">{Links}</div>;
}
