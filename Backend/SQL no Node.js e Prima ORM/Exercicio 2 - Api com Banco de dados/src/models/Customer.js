const { query } = require("../database")

class Customer {
    constructor(customerRow){
        this.id = customerRow.id
        this.name = customerRow.name
        this.email = customerRow.email
        this.createdAt = new Date(customerRow.created_at)
        this.updatedAt = new Date(customerRow.updated_at)
    }

    static async findAll(){
        const { rows } = await query(`SELECT * FROM customers;`)
        if (!rows[0]) return null
        return rows.map((row) => new Customer(row))
    }

    static async create(name, email){
        const { rows } = await query(`INSERT INTO customers (name, email) VALUES ($1, $2) RETURNING *;`, [name, email])
        return new Customer(rows[0])
    }

    static async findById(id){
        const { rows } = await query(`SELECT * FROM customers WHERE id = $1;`, [id])
        if(!rows[0]) return null
        return new Customer(rows[0])
    }

    static async update(id, attributes){
        const { rows } = await query(`SELECT * FROM customers WHERE id = $1;`, [id])
        if (!rows[0]) return null
        const customer = new Customer(rows[0])
        Object.assign(customer, attributes)
        customer.updatedAt = new Date()

        await query(
            `UPDATE customers SET
                name = $1,
                email = $2,
                updated_at = $3
            WHERE id = $4;`,
            [
                customer.name,
                customer.email,
                customer.updatedAt,
                customer.id
            ]
        )

        return customer
    }

    static async delete(id){
        const { rows } = await query(`SELECT * FROM customers WHERE id = $1;`, [id])
        if(!rows[0]) return null
        await query(`DELETE FROM customers WHERE id = $1`, [id])
        return {message: "Customer deleted successfully."}
    }
}

module.exports = Customer