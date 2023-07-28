import React from "react";
import './Input.css'

export default function Input(props) {
    return (
        <div>
            <div>
                <label for='inputA'>Input A</label>
                <input type="text" id='inputA' />
            </div>
            <div>
                <label for='inputB'>Input B</label>
                <input type="text" id='inputB' />
            </div>
        </div>
    );
};