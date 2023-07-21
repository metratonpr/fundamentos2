import React from "react";

function ComParametros(props){

    return(
        <div>
            <h3>Nome: {props.nome}</h3>
            <span>Materia: {props.materia}</span>
            <strong>Nota: {props.nota}</strong>
        </div>
    );
}


export default ComParametros