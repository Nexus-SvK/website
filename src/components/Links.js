import React from "react";

export default function Links(props){
    return(
        <li>
            <a href={props.data.link}>{props.data.context}</a>
        </li>
    )
}