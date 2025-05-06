import React from 'react'
import './Obrigado.css'
const Obrigado = ({nome, satisfacao, comentario}) => {
  return (
    <>
      <h1>Falta pouco</h1>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
      <p>Para concluir a sua avalição clique no botão de enviar abaixo</p>
      <p>Aqui está o resumo da sua avaliação <span className='dados'>{nome}</span>:</p>
      <p>Satisfacao com o produto: <span className='dados'>{satisfacao}</span></p>
      <p>Comentário: <span className='dados'>{comentario}</span> </p>
    </>      
  )
}

export default Obrigado