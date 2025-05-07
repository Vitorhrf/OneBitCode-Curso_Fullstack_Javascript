class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password){
        (this.email === email) && (this.password === password) ? console.log("Login bem sucedido!") : console.log("Email ou senha incorreta!")
    }
}

const usuario = new User("Vitor Henrique", "teste@teste.com", "teste123")
usuario.login("teste@teste.com", "teste1243")