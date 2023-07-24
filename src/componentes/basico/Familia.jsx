import React, { cloneElement } from "react";

export default function Familia(props) {
    return (
        <div>
            <h1>Familia: {props.sobrenome}</h1>
            {props.children.map((child, i) => {
                return cloneElement(child, 
                    { ...props, key: i });
            })}
        </div>
    )
}