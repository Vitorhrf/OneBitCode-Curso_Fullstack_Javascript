let opcao = 0
let materia = ""
do{
    opcao = Number(prompt("Digite uma das opções abaixo: \n\n1 - Aviação\n2 - Astronomia\n3 - Antropologia\n4 - Arqueologia\n5 - Sair"))
    switch(opcao){
        case 1:
            materia = "Aviação"
            break
        case 2:
            materia = "Astronomia"
            break
        case 3:
            materia = "Antropologia"
            break
        case 4:
            materia = "Arqueologia"
            break
        case 5:
            break
        default:
            alert("Digite uma opção valida!")
    }
    if((opcao > 0) && (opcao < 5)){
        alert("A última opção escolhida foi: "+materia)
    }
}while(opcao !== 5)

alert("Finalizado!")

let saldo = parseFloat(prompt("Digite o valor inicial do saldo!"))
opcao = 0
do{
    opcao = Number(prompt("Saldo atual: "+saldo+"\n\nSelecione uma das opções abaixo: \n\n1 - Depositar\n2 - Sacar\n0 - Sair"))
    switch(opcao){
        case 1:
            saldo += parseFloat(prompt("Qual o valor a ser depositado?"))
            break
        case 2:
            saldo -= parseFloat(prompt("Qual o valor a ser sacado?"))
            break
        case 0:
            alert("Encerrando!")
            break
        default:
            alert("Digite uma opção valida!")
    }
}while(opcao !== 0)

