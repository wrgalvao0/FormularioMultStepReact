import React from 'react'
import './Passos.css'
const Passos = ({passo}) => {
    console.log(passo)
  return (
    <div id='passos'>
        <div id='passo-1'>
            <p id={passo === 0 ? 'passoAtual' : 'passoNormal'}>Identificação</p>
        </div>
        <div id='passo-2'>
            <p id={passo === 1 ? 'passoAtual' : 'passoNormal'}>Avaliação</p>
        </div>
        <div id='passo-3'>
            <p id={passo === 2 ? 'passoAtual' : 'passoNormal'}>Envio</p>
        </div>
    </div>
  )
}

export default Passos