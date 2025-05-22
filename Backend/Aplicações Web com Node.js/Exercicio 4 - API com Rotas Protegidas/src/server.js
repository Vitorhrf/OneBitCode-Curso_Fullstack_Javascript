const express = require('express')
const authRouter = require('./routers/auth')
const adminRouter = require('./routers/admin')

const app = express()

app.use(express.json())

app.use(authRouter)
app.use('/admin', adminRouter)

app.listen(3000, () => console.log('Servidor iniciado em http://localhost:3000'))