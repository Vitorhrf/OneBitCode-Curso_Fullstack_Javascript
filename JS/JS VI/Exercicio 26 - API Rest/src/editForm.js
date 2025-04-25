/**
 * @file editForm.js
 * @description Este arquivo contém a função responsável por editar uma transação existente através de um formulário. 
 * A função realiza uma requisição para buscar os dados da transação, atualiza os valores com base no formulário e 
 * envia uma requisição para salvar as alterações no servidor.
 * 
 * @module editForm
 */

 /**
    * Edita uma transação existente com base nos dados fornecidos em um formulário.
    * 
    * @async
    * @function editForm
    * @param {Event} event - O evento de envio do formulário.
    * @returns {Promise<void>} Não retorna valor, mas atualiza a transação editada na interface e recalcula o valor total.
    * 
    * @throws {Error} Lança um erro caso a transação não seja encontrada ou ocorra algum problema na requisição.
    * 
    * @description
    * - Obtém o ID da transação a ser editada a partir do formulário.
    * - Realiza uma requisição GET para buscar os dados atuais da transação.
    * - Atualiza os valores da transação com base nos dados do formulário ou mantém os valores atuais caso os campos estejam vazios.
    * - Envia uma requisição PUT para salvar as alterações no servidor.
    * - Atualiza a interface chamando as funções `renderEditedTransaction` e `getTotalValue`.
    * - Exibe um alerta caso ocorra algum erro durante o processo.
    */
import { renderEditedTransaction, getTotalValue } from './render.js'

export async function editForm(event){
    event.preventDefault()
    
    try {
        const idInput = document.querySelector('#edit-transaction-id').value
        const res = await fetch(`http://localhost:3000/transactions/${idInput}`)
        
        if (res.status === 404) {
            throw new Error('Transação não encontrada');
        }

        const currentTransaction = await res.json()
        const name = document.querySelector('#edit-transaction-name').value.trim() || currentTransaction.name
        const value = parseFloat(document.querySelector('#edit-transaction-value').value.replace(',', '.')) || currentTransaction.value


        const formData = {
            id: idInput,
            name: name,
            value: value
        }
    
        const response = await fetch(`http://localhost:3000/transactions/${idInput}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    
        const savedTransaction = await response.json()
        document.querySelector('#edit-transaction-form').reset()
        renderEditedTransaction(savedTransaction)
        getTotalValue()

    } catch (error) {
        alert(error.message)
    }  
}

