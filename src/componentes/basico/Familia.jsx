import React from "react";

export default function Familia(props){
    return(
        <div>
            <h1>Familia: {props.sobrenome}</h1>
            {props.children}
        </div>
    )
}