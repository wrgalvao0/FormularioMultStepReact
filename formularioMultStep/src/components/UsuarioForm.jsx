import React from 'react'
import './UsuarioForm.css'

const UsuarioForm = ({atualizaNome, atualizaEmail, nome, email}) => {
  function handleChangeNome(e){
    e.preventDefault()
    let novoNome = e.target.value
    atualizaNome(novoNome)
  }
  function handleChangeEmail(e){
    e.preventDefault()
    let novoEmail = e.target.value
    atualizaEmail(novoEmail)
  }
  return (
    <>
      <label htmlFor="nome" className='labelInputs'>Nome:</label>
      <input type="text" id='nome' value={nome} onChange={handleChangeNome} placeholder='Digite o seu nome' className='inputs-passo-1' required/>
      <label htmlFor="email" className='labelInputs'>Email:</label>
      <input type="email" id='email' value={email} onChange={handleChangeEmail} placeholder='Digite o seu email' className='inputs-passo-1' required/>
    </>
  )
}

export default UsuarioForm