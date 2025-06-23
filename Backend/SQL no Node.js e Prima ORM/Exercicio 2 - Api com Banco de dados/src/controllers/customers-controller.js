const Customer = require("../models/Customer")

const customersController = {
    
    // GET /customers
    index: async (req, res) => {
        const customers = await Customer.findAll()
        res.json(customers)
    },

    // GET /customers/:id
    show: async (req, res) => {
        const customer = await Customer.findById(req.params.id)
        if(!customer) res.status(404).json({ message: "Customer not found."})
        res.json(customer)
    },

    // POST /customers
    create: async (req, res) => {
        const { name, email } = req.body
        if(typeof name !== 'string' && typeof email !== 'string') return res.status(400).json({ message: "The attributes must be 'string'."})
        const customer = await Customer.create(name, email)
        res.status(201).json(customer)
    },

    // PUT /customers/:id
    update: async (req, res) => {
        const attributes = req.body
        if((typeof attributes.name !== 'undefined' && typeof attributes.name !== 'string') || (typeof attributes.email !== 'undefined' && typeof attributes.email !== 'string')) return res.status(400).json({ message: "The attributes must be 'string'."})
            
        const customer = await Customer.update(req.params.id, attributes)
        if(!customer) return res.status(404).json({ message: "Customer not found." })
        res.json(customer)
    },

    // DELETE /customers/:id
    delete: async (req, res) => {
        const result = await Customer.delete(req.params.id)
        if(!result) return res.status(404).json({ message: "Customer not found." })
        res.json(result)
    }
}

module.exports = customersController