class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantidade) {
        this.inStock += quantidade
    }

    calculateDiscount(percentage){
        console.log(`Preço sem desconto: ${this.price}
Porcentagem do desconto: ${percentage}%
Preço com desconto: ${this.price - (this.price * (percentage/100))}`
        )
    }
}

const produto = new Product("Arroz", "Embalagem de 10kg", 100.00)
produto.addToStock(5)
console.log(produto)
produto.calculateDiscount(5)