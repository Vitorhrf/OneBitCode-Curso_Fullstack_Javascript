const express = require('express')
const authMiddleware = require('../middlewares/auth-middleware')
const userController = require('../controllers/userController')

const authRouter = express.Router()

authRouter.get('/', userController.index)
authRouter.post('/register', userController.createUser)
authRouter.post('/login', userController.login)
authRouter.get('/dashboard', authMiddleware, userController.dashboard)

module.exports = authRouter