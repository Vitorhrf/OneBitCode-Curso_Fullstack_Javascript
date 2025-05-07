function menu(opcao){
    switch (opcao){
        case 1:
            alert("O resultado da área é: "+areaTriangulo())
            break
        case 2:
            alert("O resultado da área é: "+areaRetangulo())
            break
        case 3:
            alert("O resultado da área é: "+areaQuadrado())
            break
        case 4:
            alert("O resultado da área é: "+areaTrapezio())
            break
        case 5:
            alert("O resultado da área é: "+areaCirculo())
            break
        case 0:
            alert("Encerrando!")
            break
        default:
            alert("Selecione uma opção valida!")
    }
}

function areaTriangulo(){
    let base = parseFloat(prompt("Digite a base do triangulo: "))
    let altura = parseFloat(prompt("Digite a altura do triangulo: "))
    return(base * altura / 2)
}

function areaRetangulo(){
    let base = parseFloat(prompt("Digite a base do retangulo: "))
    let altura = parseFloat(prompt("Digite a altura do retangulo: "))
    return(base * altura)
}

function areaQuadrado(){
    let lado = parseFloat(prompt("Digite o lado do quadrado: "))
    return(lado^2)
}

function areaTrapezio(){
    let baseMaior = parseFloat(prompt("Digite a base maior do trapezio: "))
    let baseMenor = parseFloat(prompt("Digite a base menor do trapezio: "))
    let altura = parseFloat(prompt("Digite a altura do trapezio: "))
    return((baseMaior+baseMenor) * altura / 2)
}

function areaCirculo(){
    let raio = parseFloat(prompt("Digite o raio do circulo: "))
    return(3.14*(raio^2))
}
let opcao
do{
    opcao = Number(prompt("Selecione uma das opções abaixo: \n\n"+
        "1 - Área do triângulo: base * altura / 2\n"+
        "2 - Área do retângulo: base * altura\n"+
        "3 - Área do quadrado: lado²\n"+
        "4 - Área do trapézio: (base maior + base menor) * altura / 2\n"+
        "5 - Área do círculo: pi * raio² (considere pi = 3.14)\n"+
        "0 - Sair"))
    menu(opcao)
}while(opcao!==0)