import Component from "./Component.js"
import Input from "./Input.js"
import Label from "./Label.js"
import Form from "./Form.js"

const elemento1 = new Component("div")
const input = new Input("text")
const label = new Label("Nome: ")
const form = new Form()

form.addElements(elemento1, label, input)

form.render()