import React from "react";

export default function Aleatorio(props){
    const {min, max } = props;
    return(

        <div>
            <h1>Numero Aleatorio</h1><br/>
            <h2>Min: {min}</h2><br/>
            <h2>Max: {max}</h2><br/>
        </div>

    );
}