const form = document.querySelector('form')
const section = document.getElementById('tecnologias')
const add = document.getElementById('adicionar')
let i = 0
let lista = ""

add.addEventListener('click', function (){
    const label = document.createElement('label')
    label.innerText = "Nome da tecnologia: "
    label.htmlFor = 'input-'+i

    const input = document.createElement('input')
    input.id = 'input-'+i
    input.type = 'text'
    input.placeholder = "Digite o nome da tecnologia"

    const radio1 = document.createElement('input')
    radio1.type = 'radio'
    radio1.name = 'tempo-'+i
    radio1.id = 'radio1-'+i
    radio1.value = "0-2 anos"
    const labelRadio1 = document.createElement('label')
    labelRadio1.innerText = '0-2 anos'
    labelRadio1.htmlFor = 'radio1-'+i

    const radio2 = document.createElement('input')
    radio2.type = 'radio'
    radio2.name = 'tempo-'+i
    radio2.id = 'radio2-'+i
    radio2.value = "3-4 anos"
    const labelRadio2 = document.createElement('label')
    labelRadio2.innerText = '3-4 anos'
    labelRadio2.htmlFor = 'radio2-'+i

    const radio3 = document.createElement('input')
    radio3.type = 'radio'
    radio3.name = 'tempo-'+i
    radio3.id = 'radio3-'+i
    radio3.value = "5+ anos"
    const labelRadio3 = document.createElement('label')
    labelRadio3.innerText = '5+ anos'
    labelRadio3.htmlFor = 'radio3-'+i

    
    const button = document.createElement('button')
    button.innerText = "Excluir Tecnologia"
    button.type = 'button'

    let br = document.createElement('br')
    const div = document.createElement('div')
    div.appendChild(label)
    div.appendChild(br)
    br = document.createElement('br')
    div.appendChild(input)
    div.appendChild(br)
    br = document.createElement('br')
    div.append(br, radio1, labelRadio1, radio2, labelRadio2, radio3, labelRadio3)
    br = document.createElement('br')
    div.appendChild(br)
    br = document.createElement('br')
    div.appendChild(br)
    br = document.createElement('br')
    div.appendChild(button)
    div.appendChild(br)
    br = document.createElement('br')
    div.appendChild(br)
    section.appendChild(div)
    
    button.addEventListener('click', function (){
        section.removeChild(div)
    })

    i++
})

form.addEventListener('submit', function (ev){
    ev.preventDefault()
    const nome = document.getElementById('nome').value
    let tecnologias = ""
    const divsTecnologias = section.querySelectorAll('div')

    divsTecnologias.forEach(function (element){
        const nomeTecnologia = element.querySelector('input[type="text"]').value
        const tempoTecnologia = element.querySelector('input[type="radio"]:checked').value
        tecnologias += nomeTecnologia+" ("+tempoTecnologia+") | "
    })
    lista += "Nome: "+nome+"\nTecnologias: "+tecnologias+"\n"
    alert("Cadastrado com sucesso!\n\n"+lista)

    document.getElementById('nome').value = ""
    divsTecnologias.forEach(function (element){
        section.removeChild(element)
    })
})