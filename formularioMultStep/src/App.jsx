import { useState } from 'react'
import UsuarioForm from './components/UsuarioForm'
import RevisarForm from './components/RevisarForm'
import Obrigado from './components/Obrigado'
import './App.css'

function App() {
  let [passo, setPasso] = useState(0)
  let [nome, setNome] = useState('')
  let [comentario, setComentario] = useState('')
  let [avaliacao, setAvaliacao] = useState('')
  let [email, setEmail] = useState('')
  function voltarPasso(e){
    e.preventDefault()
    if(passo > 0 && passo <= 2){
      setPasso(passo - 1)
    }
    else{
      alert('nao permitido')
    }
    console.log(passo)
  }
  function avancaPasso(e){
    e.preventDefault()
    if(passo >= 0 && passo < 2){
      setPasso(passo + 1)
    }
    else{
      alert('nao permitido')
    }
    console.log(passo)
  }
  return (
    <>
    <div id='container-principal'>
      <header>
        <h1>Deixei sua avaliação</h1>
        <h2>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</h2>
      </header>
      <div id='form-container-pai'>
        <div id='form-container'>
          <p>Estapas</p>
          <form>
            <div id='container-inputs'>
              {passo === 0 && <UsuarioForm atualizaNome={setNome} atualizaEmail={setEmail} nome={nome} email={email}/>}
              {passo === 1 && <RevisarForm  atualizaComentario={setComentario} atualizaAvaliacao={setAvaliacao} comentario={comentario} avaliacao={avaliacao} />}
              {passo === 2 && <Obrigado nome={nome} comentario={comentario} satisfacao={avaliacao}/>}
            </div>
            <div id='container-botoes'>
              <button onClick={voltarPasso} className='botoes'>Voltar</button>
              <button onClick={avancaPasso} className='botoes'>Avançar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
