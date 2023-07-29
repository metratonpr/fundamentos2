import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numero,
        passo: this.props.passo
    }

    incrementar = () => {

    }
    decrementar = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="numero">Numero</label>
                    <input type="text" id="numero" value={this.state.numero} />
                </div>
                <div>
                    <label htmlFor="passo">Passo</label>
                    <input type="text" id="passo" value={this.state.passo} />
                </div>
                <div>
                    <button onClick={this.incrementar}>-</button>

                    <button onClick={this.decrementar}>+</button>
                </div>
            </div>
        )
    }
}