import React from "react";

export default function Links(props){
    return(
        <li>
            <a href={props.link}>{props.context}</a>
        </li>
    )
}