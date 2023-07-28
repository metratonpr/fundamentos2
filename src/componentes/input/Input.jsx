import React, {useState} from "react";
import './Input.css'

export default function Input(props) {
    const [valor, setValor] = useState('');

    function quandoMudar(e){
        setValor(e.target.value)
    } 
    return (
        <div>
            <div>
                <label for='inputA'>Input A</label>
                <input type="text" id='inputA' value={valor} onChange={quandoMudar}/>
            </div>
            <div>
                <label for='inputB'>Input B</label>
                <input type="text" id='inputB' value={valor}/>
            </div>
        </div>
    );
};