/**
 * Este script é responsável por inicializar os eventos e carregar os dados
 * necessários para a aplicação de transações financeiras.
 * 
 * Funcionalidades principais:
 * - Adiciona eventos de envio aos formulários de adicionar, editar e excluir transações.
 * - Carrega as transações existentes e calcula o valor total ao carregar a página.
 * 
 * Dependências:
 * - Funções importadas de outros módulos:
 *   - `getTransactions`: Obtém e renderiza as transações existentes.
 *   - `getTotalValue`: Calcula e exibe o valor total das transações.
 *   - `formAdd`: Lida com o envio do formulário de adição de transações.
 *   - `editForm`: Lida com o envio do formulário de edição de transações.
 *   - `deleteForm`: Lida com o envio do formulário de exclusão de transações.
 * 
 * Eventos:
 * - `DOMContentLoaded`: Garante que o DOM esteja completamente carregado antes
 *   de adicionar os eventos e executar as funções assíncronas.
 */
import { getTransactions, getTotalValue } from "./render.js"
import { formAdd } from "./formAdd.js"
import { editForm } from "./editForm.js"
import { deleteForm } from "./deleteForm.js"

document.addEventListener('DOMContentLoaded', async () => {
    document.querySelector('#add-transaction-form').addEventListener('submit', formAdd)
    document.querySelector('#edit-transaction-form').addEventListener('submit', editForm)
    document.querySelector('#delete-transaction-form').addEventListener('submit', deleteForm)
    await getTransactions()
    await getTotalValue()
})