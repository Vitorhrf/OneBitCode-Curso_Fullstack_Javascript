const express = require('express')
const path = require('node:path')

const app = express()
let emailList = []


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/sucesso', (req, res) =>{
    res.render('sucesso')
})

app.post('/cadastro', (req, res) =>{
    emailList.push(req.body.email)
    res.redirect('/sucesso')
})

app.get('/lista', (req, res) =>{
    res.render('lista', { emailList })
})

app.delete('/deletar', (req, res) =>{
    const { email } = req.body
    emailList = emailList.filter(e => e !== email)
    res.json({message: `Email ${email} deletado com sucesso.`})
})

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`O servidor foi iniciado em: http://localhost:${PORT}/`)
})