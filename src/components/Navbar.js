import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Toggle from "./Toggle";
import { render } from "@testing-library/react";
import { useState } from "react/cjs/react.production.min";

export default function Navbar(props) {
let links = props.data.map((data) => <Link
  to={data.id}
  className="links"
  key={data}
  smooth={true}
  duration={1000}
>
  {data.label}
</Link>)

    return (
      <div id="nav" className="navigation">
        <Toggle />
        {links}
      </div>
    );
  }
