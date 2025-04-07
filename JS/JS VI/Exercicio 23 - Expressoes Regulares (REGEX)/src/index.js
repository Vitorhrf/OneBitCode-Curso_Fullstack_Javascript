import emailValidate from "./emailValidate.js"
import passwordValidate from "./passwordValidate.js"
import './styles/style.css'

document.getElementById('submit').addEventListener('click', function(){
    let emailBol = emailValidate(document.getElementById('email').value)
    let passwordBol = passwordValidate(document.getElementById('password').value)
    if(emailBol&&passwordBol){
        alert("Cadastrado com sucesso!")
    }
})