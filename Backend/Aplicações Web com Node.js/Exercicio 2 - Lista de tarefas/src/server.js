const express = require('express')
const path = require('node:path')
const router = require('./router')

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(router)

const PORT = 3000

app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}/`))