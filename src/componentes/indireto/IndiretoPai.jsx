import React, { useState } from "react";
import IndiretaFilho from "./IndiretoFilho";


export default function IndiretaPai() {

    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(40)
    const [eNerd, setENerd] = useState(true)

    function processar(nomeFilho, idadeFilho, eNerdFilho){
        setNome(nomeFilho)
        setIdade(idadeFilho)
        setENerd(eNerdFilho)
    }

    return (
        <div>
            <h2>Elemento Pai</h2>
            <p>{nome}</p>
            <p>{idade}</p>
            <p>É nerd: {eNerd ? "Sim" : "Não"}</p>
            <IndiretaFilho clickPai={processar} />
        </div>
    )
}