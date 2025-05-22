const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const secretKey = 'Guwf12hw3r4AwG4uw645fD'

const adminController = {
    
    createAdminUser: (req, res) => {
        const { name, email, password } = req.body
        if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
            return res.status(400).json({ message: 'Invalid email!' })
        }
        if(typeof name !== 'string' || typeof password !== 'string' || typeof email !== 'string'){
            return res.status(400).json({ message: 'Error type data.' })
        }
        if(userModel.verifyEmailExists(email)){
            return res.status(409).json({ message: 'User already exists!' })
        }
        const newUser = userModel.createAdmin(name, email, password)

        const token = jwt.sign({ userName: newUser.name, userEmail: newUser.email }, secretKey, { expiresIn: '1d'})
        res.status(201).json({ token })
    },

    dashboard: (req, res) => {
        const username = req.authenticatedUser.name
        res.json({ message: `Bem-vindo(a), ${username}!`, users: userModel.getAllUsers()})
    },

    deleteUser: (req, res) => {
        const { email } = req.body
        if(userModel.verifyEmailExists(email)){
            userModel.deleteUser(email)
            res.status(201).json({ message: 'User deleted with success!'})
        } else {
            return res.status(404).json({ message: 'User not found!'})
        }
    }
}

module.exports = adminController