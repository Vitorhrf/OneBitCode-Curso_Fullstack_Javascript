let opcao
let fila = []
let lista = ""

do{
    if(fila.length !== 0){
        for(let i = 0; i < fila.length; i++){
            lista += (i+1)+" - "+fila[i]+"\n"
        }
    }
    opcao = Number(prompt("Fila de espera do consultório médico: \n"+lista+"\nSelecione uma opção:\n1 - Novo paciente\n2 - Consultar paciente\n0 - Sair"))
    switch(opcao){
        case 1:
            fila.push(prompt("Digite o nome do paciente: "))
            break
        case 2:
            if(fila.length == 0){
                alert("A fila está vazia!")
            }else{
                alert("O paciente a ser consultado é: "+fila.shift())
            }
            break
        case 0:
            alert("Encerrando os atendimentos!")
            break
        default:
            alert("Digite uma opção valida!")
    }
    lista = ""
}while(opcao !== 0)

let pilha = []
do{
    if(pilha.length !== 0){
        for(let i = 0; i < pilha.length; i++){
            lista += (i+1)+" - "+pilha[i]+"\n"
        }
    }
    opcao = Number(prompt("Baralho de cartas: \n"+lista+"\nSelecione uma opção:\n1 - Adicionar uma carta\n2 - Puxar uma carta\n0 - Sair"))
    switch(opcao){
        case 1:
            pilha.push(prompt("Qual a carta?"))
            break
        case 2:
            if(pilha.length == 0){
                alert("O baralho está vazio!")
            }else{
                alert("A carta puxada foi: "+pilha.pop())
            }
            break
        case 0:
            alert("Guardando o baralho!")
            break
        default:
            alert("Digite uma opção valida!")
    }
    lista = ""
}while(opcao !== 0)