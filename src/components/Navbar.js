import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar(props) {
  const Links = props.data.map((data) => (
    <Link
      to={data.id}
      className="links"
      key={data}
      smooth={true}
      duration={1000}
    >
      {data.label}
    </Link>
  ));
  return <div className="navigation">{Links}</div>;
}
