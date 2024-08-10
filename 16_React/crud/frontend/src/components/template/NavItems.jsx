import React from "react";

const item = props =>  
        <a href={props.link}>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </a>

export default item