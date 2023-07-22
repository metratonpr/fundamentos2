import React from "react";

export default function FamiliaMembro(props){
    return(
        <div>
            <h1>Nome: {props.nome} <strong>{props.sobrenome}</strong>.</h1>
        </div>
    )
}