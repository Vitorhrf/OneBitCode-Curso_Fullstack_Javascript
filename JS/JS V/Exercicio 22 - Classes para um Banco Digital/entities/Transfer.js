class Transfer {
    constructor(userSend, userReceive, value) {
        this.userSend = userSend
        this.userReceive = userReceive
        this.value = value
        this.date = new Date()                
    }
}

export default Transfer