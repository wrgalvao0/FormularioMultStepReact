
import './RevisarForm.css'
const RevisarForm = ({atualizaComentario, atualizaAvaliacao, comentario, avaliacao}) => {
  function handleChangeComentario(e){
    let novoComentario = e.target.value
    atualizaComentario(novoComentario)
  }
  function handleChangeAvaliacao(e){
    let novaAvaliacao = e.target.value
    atualizaAvaliacao(novaAvaliacao)
  }
  return (
    <>
    <div id='container-checkboxs'>
      <div className='container-checkbox'>
        <label htmlFor="opcao-1">Insatisfeito</label>
        <input className='inputs-checkboxs' value='Insatisfeito' checked={avaliacao === 'Insatisfeito'} onChange={handleChangeAvaliacao} name='opcao' type='radio' id='opcao-1'/>
      </div>
      <div className='container-checkbox'>
        <label htmlFor="opcao-2">Poderia ser melhor</label>
        <input className='inputs-checkboxs' value='Poderia ser melhor'  checked={avaliacao === 'Poderia ser melhor'}  onChange={handleChangeAvaliacao} name='opcao' type="radio" id='opcao-2' />
      </div>
      <div className='container-checkbox'>
        <label htmlFor="opcao-3">Satisfeito</label>
        <input className='inputs-checkboxs' value='Satisfeito'  checked={avaliacao === 'Satisfeito'}  onChange={handleChangeAvaliacao} name='opcao' type="radio" id='opcao-3' />
      </div>
      <div className='container-checkbox'>
        <label htmlFor="opcao-4">Muito satisfeito</label>
        <input className='inputs-checkboxs' value='Muito satisfeito'  checked={avaliacao === 'Muito satisfeito'}  onChange={handleChangeAvaliacao} name='opcao' type="radio" id='opcao-4' />
      </div>
    </div>
     <textarea name="" id="comentario" placeholder='Conte como foi a sua experiencia com o produto' value={comentario} onChange={handleChangeComentario}></textarea>
    </>
  )
}

export default RevisarForm