import Component from "./Component.js"

class Form extends Component {
    constructor(){
        super('form')
    }
    addElements(...elements){
        elements.forEach(element => this.component.append(element.component))
    }
}

export default Form