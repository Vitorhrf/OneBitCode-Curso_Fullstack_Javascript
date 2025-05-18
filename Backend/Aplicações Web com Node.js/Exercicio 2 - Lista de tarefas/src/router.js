const express = require('express')
const listController = require('./controllers/listController')

const router = express.Router()

router.get('/', listController.index)
router.get('/listas', listController.listas)
router.get('/listas/:id', listController.show)
router.get('/create', listController.create)
router.post('/create', listController.save)
router.post('/delete/:id', listController.delete)
router.post('/createTask', listController.createTask)
router.post('/completeTask', listController.completeTask)
module.exports = router