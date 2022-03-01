import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { dataMenu } from "./Data";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const nav = useRef();
  const [width, setWidth] = useState();
  const [click, setClick] = useState(false);

  const getSize = () => {
    setWidth(nav.current.clientWidth);
  };

  useEffect(() => {
    getSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);
  return (
    <div ref={nav} id="nav" className="navigation">
      <div className={click||width>483 ? "show" : "hidden"}>
        {dataMenu.map((data) => (
          <Link
            to={data.id}
            className="links"
            key={data}
            smooth={true}
            duration={1000}
          >
            {data.label}
          </Link>
        ))}
      </div>
      <FontAwesomeIcon
        id="icon"
        onClick={() => {
          setClick(!click);
        }}
        icon={click ? faXmark : faBars}
      />
    </div>
  );
}
