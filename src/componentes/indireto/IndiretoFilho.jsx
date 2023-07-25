import React from "react";

export default function IndiretaFilho(props) {
    const clickPai = props.clickPai
    const gerarIdade = () => parseInt(Math.random() * 100)
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button>
                Fornecer Informações
            </button>
        </div>
    )
}