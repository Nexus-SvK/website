import React from "react";

export default function Navbar(props){
    return(
        <div>
            {props.data.map(data => <a href={props.data}>{props.data}</a>)}
        </div>
    );
}