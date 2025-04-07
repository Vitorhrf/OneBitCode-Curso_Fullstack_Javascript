function emailValidate(email){
    try {
        if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
            throw new Error('E-mail inválido!')
        }
        return true
    } catch (error){
        alert(error.message)
    }
}
export default emailValidate