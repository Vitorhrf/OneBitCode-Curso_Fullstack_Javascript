function passwordValidate(password){
    try {
        if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/)){
            throw new Error('Senha inválida!')
        }
        return true
    } catch (error){
        alert(error.message)
    }
}
export default passwordValidate