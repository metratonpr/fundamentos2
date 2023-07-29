import React, {useState} from "react";
import './Input.css'

export default function Input(props) {
    const [nome, setNome] = useState('');
    function quandoMudar(e){
        setNome(e.target.value)
    } 
    return (
        <div>
            <div>
                <label for='inputA'>Input A</label>
                <input type="text" id='inputA' 
                value={nome} onChange={quandoMudar}/>
            </div>
            <div>
                <label for='inputB'>Input B</label>
                <input type="text" id='inputB' value={nome}/>
            </div>
        </div>
    );
};