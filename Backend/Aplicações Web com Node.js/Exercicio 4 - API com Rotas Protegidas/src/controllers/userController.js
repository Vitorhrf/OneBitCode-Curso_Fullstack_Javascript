const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const secretKey = 'Guwf12hw3r4AwG4uw645fD'

const userController = {
    
    index: (req, res) => {
        res.json({ message: 'Welcome!'})
    },

    createUser: (req, res) => {
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
        const newUser = userModel.createUser(name, email, password)

        const token = jwt.sign({ userName: newUser.name, userEmail: newUser.email }, secretKey, { expiresIn: '1h'})
        res.status(201).json({ token })
    },

    login: (req, res) => {
        const { email, password } = req.body
        const userLogin = userModel.verifyUser(email, password)

        if(!userLogin){
            return res.status(401).json({ message: 'Invalid credentials'})
        }

        const token = jwt.sign({ userName: userLogin.name, userEmail: userLogin.email }, secretKey, { expiresIn: '1d'})

        res.json({ token })
    },

    dashboard: (req, res) => {
        const username = req.authenticatedUser.name
        res.json({ message: `Welcome, ${username}!`})
    }
}

module.exports = userController