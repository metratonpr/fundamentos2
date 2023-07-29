import React, {useState} from 'react'

export default function Contador(props){
    const[numero, setNumero] = useState(0)
    const[passo, setPasso] = useState(0)
    return(
        <div>
            <div>
                <label htmlFor="numero">Numero</label>
                <input type="text" id="numero" value={numero} />
            </div>
            <div>
                <label htmlFor="passo">Passo</label>
                <input type="text" id="passo" value={passo} />
            </div>
            <div>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    )
}