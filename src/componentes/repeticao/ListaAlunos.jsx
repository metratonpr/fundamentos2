import React from "react";
import alunos from '../../Data/alunos'

export default function ListaAlunos() {
    const dados = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.nome} tem a nota {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <h1>Lista de Alunos</h1>
            <ul>
                {dados}
            </ul>
        </div>
    )
}