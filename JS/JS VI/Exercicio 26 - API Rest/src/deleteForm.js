/**
 * Função responsável por deletar uma transação com base no ID fornecido.
 * 
 * @function deleteForm
 * @async
 * @param {Event} event - O evento de submissão do formulário que dispara a função.
 * 
 * @description
 * Esta função realiza as seguintes etapas:
 * 1. Previne o comportamento padrão do evento de submissão do formulário.
 * 2. Obtém o ID da transação a ser deletada a partir do campo de entrada do formulário.
 * 3. Faz uma requisição HTTP DELETE para a API REST no endpoint correspondente ao ID da transação.
 * 4. Caso a transação não seja encontrada (status 404), lança um erro com uma mensagem apropriada.
 * 5. Remove o elemento HTML correspondente à transação deletada.
 * 6. Reseta o formulário de exclusão.
 * 7. Atualiza o valor total das transações chamando a função `getTotalValue`.
 * 
 * @throws {Error} Lança um erro caso a transação não seja encontrada ou ocorra algum problema na requisição.
 */
import { getTotalValue } from './render.js'
export async function deleteForm(event){
    event.preventDefault()

    const idInput = document.querySelector('#delete-transaction-id').value
    try {
        const res = await fetch(`http://localhost:3000/transactions/${idInput}`, {
            method: 'DELETE'
        })

        if (res.status === 404) {
            throw new Error('Transação não encontrada');
        }

        document.querySelector(`#transaction-${idInput}`).remove()
        document.querySelector('#delete-transaction-form').reset()
        getTotalValue()
    } catch (error) {
        alert(error.message)
    }
}

