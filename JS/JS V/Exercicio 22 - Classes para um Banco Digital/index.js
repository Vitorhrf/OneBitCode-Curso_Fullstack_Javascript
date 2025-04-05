import App from "./App.js"

// Criando usuários
App.createUser("Alice", "alice@email.com")
App.createUser("Bob", "bob@email.com")

console.log("\n👤 Usuários criados:")
App.showUsers

// Fazendo depósitos
App.deposit("alice@email.com", 1000)
App.deposit("bob@email.com", 500)

console.log("\n💰 Após depósitos:")
App.showUsers

// Fazendo empréstimo (3 parcelas para Alice)
App.loan("alice@email.com", 600, 3)

console.log("\n📈 Após empréstimo para Alice:")
App.showUsers

// Transferência de Alice para Bob
const alice = App.findUser("alice@email.com")
const bob = App.findUser("bob@email.com")

App.transfer(alice.email, bob.email, 400)

console.log("\n🔄 Após transferência de Alice para Bob:")
App.showUsers

// Alterar taxa de juros
App.changeInterestRate(3) // agora é 3%

// Novo empréstimo com nova taxa
App.loan("bob@email.com", 300, 2)

console.log("\n📈 Após novo empréstimo com nova taxa para Bob:")
App.showUsers

// Exibindo detalhes
console.log("\n📋 Extrato completo da Alice:")
console.log("Depósitos:", alice.account.deposits)
console.log("Empréstimos:", alice.account.loans)
console.log("Transferências:", alice.account.transfers)

console.log("\n📋 Extrato completo do Bob:")
console.log("Depósitos:", bob.account.deposits)
console.log("Empréstimos:", bob.account.loans)
console.log("Transferências:", bob.account.transfers)
