/**
 * Função assíncrona que lida com o evento de envio do formulário para adicionar uma nova transação.
 * 
 * @async
 * @function formAdd
 * @param {Event} event - O evento de envio do formulário.
 * 
 * @description
 * Esta função previne o comportamento padrão do envio do formulário, coleta os dados do formulário,
 * envia uma requisição POST para a API para salvar a transação, e atualiza a interface do usuário
 * com a nova transação e o valor total atualizado.
 * 
 * - Coleta os valores dos campos "name" e "value" do formulário.
 * - Converte o valor para um número de ponto flutuante, substituindo vírgulas por pontos.
 * - Envia os dados para a API REST localizada em `http://localhost:3000/transactions`.
 * - Após salvar a transação, limpa o formulário, renderiza a nova transação na interface e atualiza o valor total.
 * 
 * @requires ./render.js
 * - `renderTransaction`: Função para renderizar a transação na interface.
 * - `getTotalValue`: Função para calcular e exibir o valor total das transações.
 */
import { renderTransaction, getTotalValue } from './render.js'

export async function formAdd(event){
    event.preventDefault()
    
    const formData = {
        name: document.querySelector('#transaction-name').value,
        value: parseFloat(document.querySelector('#transaction-value').value.replace(',', '.'))
    }

    const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    const savedTransaction = await response.json()
    document.querySelector('#add-transaction-form').reset()
    renderTransaction(savedTransaction)
    getTotalValue()
}

