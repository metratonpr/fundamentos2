import React from "react";
import './Card.css'

export default function Card(props) {
    const estilo = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00', 
    }
    return (
        <div className="card" style={estilo}>
            <div className="titulo">{props.titulo}</div>
            <div className="conteudo">
                {props.children}
            </div>
        </div>
    );
};

