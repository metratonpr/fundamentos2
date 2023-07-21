import React from "react";

function Hello() {
    const msg = "Ola, seja bem vindo!";
    const area = 2 * 10;
    return (
        <div>
            <h1>{msg}</h1>
            <h2>{area}</h2>
        </div>
    );
}

export default Hello;