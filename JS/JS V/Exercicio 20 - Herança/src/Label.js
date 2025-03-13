import Component from "./Component.js"

class Label extends Component {
    constructor(text){
        super('label')
        this.text = text
        this.component.innerText = this.text
    }
}

export default Label