import React from "react";
import "./Navbar.css";
import {useEffect} from 'react';

export default function Navbar(props) {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navigation'];
  if(scrolled){
    x.push('scrolled');
  }

  const Links = props.data.map((data) => (
    <a className="links" key={data}>{data}</a>
  ));
  return (
  // <div className={x.join(" ")}>
    <div className="navigation">
      {Links}
    </div>
    // </div>
    );
}