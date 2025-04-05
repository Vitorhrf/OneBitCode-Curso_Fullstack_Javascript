import Deposit from "./Deposit.js"
import Loan from "./Loan.js"
import Transfer from "./Transfer.js"

class Account {
    #balance = 0
    constructor(user) {
        this.deposits = []
        this.loans = []
        this.transfers = []
        this.accountOwner = user
    }

    get balance(){
        return this.#balance
    }

    addBalance(value){
        this.#balance += value
    }

    withdrawBalance(value){
        if (this.#balance < value) {
            throw new Error("Saldo insuficiente para transferência.")
        }
        this.#balance -= value
    }

    saveTransfer(transfer){
        this.transfers.push(transfer)
    }

    makeDeposit(value, date){
        this.deposits.push(new Deposit(value, date))
        this.addBalance(value)
    }

    makeLoan(value, date, installments){
        this.loans.push(new Loan(value, date, installments))
        this.addBalance(value)
    }

    makeTransfer(userSend, userReceive, value, date){
        if(userSend instanceof Account && userReceive instanceof Account && userSend !== userReceive){
            const transfer = new Transfer(userSend, userReceive, value, date)
            if(userSend.accountOwner === this.accountOwner){
                this.withdrawBalance(value)
                this.saveTransfer(transfer)
                userReceive.saveTransfer(transfer)
                userReceive.addBalance(value)
            } else if(userReceive.accountOwner === this.accountOwner){
                this.addBalance(value)
                this.saveTransfer(transfer)
                userSend.withdrawBalance(value)
                userSend.saveTransfer(transfer)
            }
        }
    }
}

export default Account