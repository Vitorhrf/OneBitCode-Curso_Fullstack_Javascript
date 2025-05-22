const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const secretKey = 'Guwf12hw3r4AwG4uw645fD'

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    
    if(!authHeader) {
        req.authenticatedUser = { name: 'visitor'}
        res.status(200)
        return next()
    }

    const token = authHeader.split(' ')[1]
    try {
        const decodedToken = jwt.verify(token, secretKey)

        const user = userModel.verifyEmail(decodedToken.userEmail)
        if(!user){
            return res.status(401).json({ message: 'Invalid user' })
        }

        req.authenticatedUser = user

        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token!' })
    }
    
}

module.exports = authMiddleware