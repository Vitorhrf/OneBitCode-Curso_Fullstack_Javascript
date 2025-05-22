const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const secretKey = 'Guwf12hw3r4AwG4uw645fD'

const adminMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    
    if(!authHeader) {
        return res.status(401).json({ message: 'Authorization required!' })
    }

    const token = authHeader.split(' ')[1]
    try {
        const decodedToken = jwt.verify(token, secretKey)

        const user = userModel.verifyEmail(decodedToken.userEmail)
        if(!user){
            return res.status(401).json({ message: 'Invalid user' })
        }

        if(user.typeuser !== 'admin'){
            return res.status(401).json({ message: 'Access denied!'})
        }
        req.authenticatedUser = user

        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token!' })
    }
    
}

module.exports = adminMiddleware