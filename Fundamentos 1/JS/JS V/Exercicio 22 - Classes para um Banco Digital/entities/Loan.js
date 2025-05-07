import Installment from "./Installment.js"

class Loan {
    static #interestRate = 0.025
    constructor(value, installments) {
        this.value = value
        this.date = new Date()
        this.installments = []

        const totalComJuros = value * (1 + Loan.#interestRate * installments)
        const valueInst = totalComJuros / installments

        for(let i = 1; i <= installments; i++){
            const installment = new Installment(valueInst, i)
            this.installments.push(installment)
        }
    }

    static get interestRate(){
        return Loan.#interestRate * 100
    }

    static set interestRate(value){
        Loan.#interestRate = value / 100
    }
}

export default Loan