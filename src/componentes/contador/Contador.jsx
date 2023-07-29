import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numero || 0,
        passo: this.props.passo || 1,
    }

    setNumero = (e) => {
        this.setState({
            numero: parseInt(e.target.value)
        })
    }
    setPasso = (e) => {
        this.setState({
            passo: parseInt(e.target.value)
        })
    }
    incrementar = () => {
        this.setState({
            numero: this.state.numero
                + this.state.passo
        })

    }
    decrementar = () => {
        this.setState({
            numero: this.state.numero
                - this.state.passo
        })

    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="numero">Numero</label>
                    <input type="text" id="numero" value={this.state.numero}
                    onChange={this.setNumero} />
                </div>
                <div>
                    <label htmlFor="passo">Passo</label>
                    <input type="text" id="passo" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <div>
                    <button onClick={this.decrementar}>-</button>

                    <button onClick={this.incrementar}>+</button>
                </div>
            </div>
        )
    }
}