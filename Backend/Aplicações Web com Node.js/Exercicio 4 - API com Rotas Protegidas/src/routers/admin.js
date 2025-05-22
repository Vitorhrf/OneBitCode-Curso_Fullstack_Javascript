const express = require('express')
const adminMiddleware = require('../middlewares/admin-middleware')
const adminController = require('../controllers/adminController')
const adminRouter = express.Router()

adminRouter.get('/dashboard', adminMiddleware, adminController.dashboard)
adminRouter.post('/createAdmin', adminMiddleware, adminController.createAdminUser)
adminRouter.delete('/deleteUser', adminMiddleware, adminController.deleteUser)

module.exports = adminRouter