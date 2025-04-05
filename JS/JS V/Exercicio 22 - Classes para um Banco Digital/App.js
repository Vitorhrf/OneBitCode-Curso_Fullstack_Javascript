import User from "./entities/User.js"
import Loan from "./entities/Loan.js"

class App {
    static #users = []
    
    static createUser(name, email){
        if(this.#users.find(user => user.email === email)){
            throw new Error('Email já cadastrado!')
        }
        this.#users.push(new User(name, email))
    }
    
    static get showUsers(){
        const data = this.#users.map(user => ({
            Nome: user.name,
            Email: user.email,
            Saldo: user.account.balance
        }))
        console.table(data)
    }
    
    static findUser(email){
        const userFind = this.#users.find(user => user.email === email)
        if(!userFind){
            throw new Error('Usuário não encontrado!')
        }
        return userFind
    }

    static deposit(email, value){
        this.findUser(email).account.makeDeposit(value, new Date())
    }

    static transfer(emailSender, emailReceiver, value){
        const sender = this.findUser(emailSender)
        const receiver = this.findUser(emailReceiver)
        sender.account.makeTransfer(sender.account, receiver.account, value, new Date())
    }

    static loan(email, value, installments){
        this.findUser(email).account.makeLoan(value,new Date(), installments)
    }

    static changeInterestRate(value){
        Loan.interestRate = value
    }
}

export default App