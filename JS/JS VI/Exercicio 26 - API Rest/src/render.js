/**
 * Este módulo contém funções para renderizar e manipular transações em uma lista HTML,
 * bem como calcular e exibir o valor total das transações.
 * As funções interagem com uma API REST para buscar dados de transações.
 */

/**
 * Renderiza uma transação na lista de transações no DOM.
 * 
 * @param {Object} transactionData - Dados da transação a ser renderizada.
 * @param {number} transactionData.id - ID da transação.
 * @param {string} transactionData.name - Nome da transação.
 * @param {number} transactionData.value - Valor da transação.
 */

/**
 * Busca todas as transações da API e as renderiza na lista de transações no DOM.
 * 
 * @async
 * @function
 */

/**
 * Calcula o valor total de todas as transações e atualiza o elemento no DOM
 * que exibe o valor total. Aplica classes CSS para indicar se o valor total
 * é positivo ou negativo.
 * 
 * @async
 * @function
 */

/**
 * Atualiza os dados de uma transação já existente no DOM com base nos novos
 * dados fornecidos.
 * 
 * @param {Object} transactionData - Dados atualizados da transação.
 * @param {number} transactionData.id - ID da transação.
 * @param {string} transactionData.name - Nome atualizado da transação.
 * @param {number} transactionData.value - Valor atualizado da transação.
 */
export function renderTransaction(transactionData){
    const transaction = document.createElement('li')
    transaction.classList.add('transaction')
    transaction.id = `transaction-${transactionData.id}`

    const id = document.createElement('p')
    id.classList.add('transaction-id')
    id.textContent = `ID: ${transactionData.id}`

    const name = document.createElement('p')
    name.classList.add('transaction-name')
    name.textContent = `Nome da transação: ${transactionData.name}`

    const value = document.createElement('p')
    value.classList.add('transaction-value')
    value.textContent = `Valor da transação: ${transactionData.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`

    transaction.append(id, name, value)
    document.querySelector('#transaction-list').appendChild(transaction)
}

export async function getTransactions(){
    const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())
    transactions.forEach(renderTransaction)
}

export async function getTotalValue(){
    const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())
    let totalValue = 0
    transactions.forEach(transaction => {
        totalValue += transaction.value
    })
    const totalValueElement = document.querySelector('#total-value')
    totalValueElement.textContent = `Valor total: ${totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    if(totalValue >= 0){
        totalValueElement.classList.add('positive')
        totalValueElement.classList.remove('negative')
    }
    else if(totalValue < 0){
        totalValueElement.classList.add('negative')
        totalValueElement.classList.remove('positive')
    }
}

export function renderEditedTransaction(transactionData){
    const existingTransaction = document.querySelector(`#transaction-${transactionData.id}`)
    existingTransaction.querySelector('.transaction-name').textContent = `Nome da transação: ${transactionData.name}`
    existingTransaction.querySelector('.transaction-value').textContent = `Valor da transação: ${transactionData.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}