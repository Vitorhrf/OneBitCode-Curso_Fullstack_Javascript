import Component from "./Component.js"

class Input extends Component {
    constructor(type){
        super('input')
        this.type = type
        this.component.type = this.type
    }
}

export default Input