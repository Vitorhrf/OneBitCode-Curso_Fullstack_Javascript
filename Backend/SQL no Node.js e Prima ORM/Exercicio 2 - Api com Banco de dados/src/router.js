const { Router } = require('express')
const customersController = require('./controllers/customers-controller')
const router = Router()

router.get("/customers", customersController.index)
router.get("/customers/:id", customersController.show)
router.post("/customers", customersController.create)
router.put("/customers/:id", customersController.update)
router.delete("/customers/:id", customersController.delete)

module.exports = router