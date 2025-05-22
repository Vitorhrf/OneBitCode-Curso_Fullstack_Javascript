const { verify } = require("jsonwebtoken")

let users = [{
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin123',
    typeuser: 'admin' 
},
{
    name: 'Adm123',
    email: 'adm@adm.com',
    password: 'admin54321',
    typeuser: 'admin' 
},
{
    name: 'Test',
    email: 'test@test.com',
    password: '123456',
    typeuser: 'standard' 
}]

const userModel = {
    getAllUsers(){
        return users
    },
    createUser(name, email, password){
        const newUser = {name, email, password, typeuser: 'standard'}
        users.push(newUser)
        return newUser
    },
    createAdmin(name, email, password){
        const newUser = {name, email, password, typeuser: 'admin'}
        users.push(newUser)
        return newUser
    },
    deleteUser(email){
        users = users.filter(user => user.email !== email)
    },
    verifyEmailExists(email){
        const userExists = users.some(user => user.email === email)
        return userExists
    },
    verifyUser(email, password){
        const userLogin = users.find(user => user.email === email && user.password === password)
        return userLogin
    },
    verifyEmail(email){
        const user = users.find(user => user.email === email)
        return user
    }
}

module.exports = userModel