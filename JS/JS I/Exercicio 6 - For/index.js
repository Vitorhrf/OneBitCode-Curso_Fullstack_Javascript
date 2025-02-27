const numero = parseFloat(prompt("Digite o numero para tabuada de multiplicação"))
let tabuada = ""
for (let i = 0; i <= 20; i++){
    tabuada += numero + " * " + i + " = " + (numero*i) + "\n"
}
alert("A tabuada de multiplicação do "+numero+" é:\n\n"+tabuada)

let palavra = prompt("Digite uma palavra para verificar se é palindroma")
let palavraInversa = ""
for(let i = (palavra.length - 1); i >= 0; i--){
    palavraInversa += palavra[i]
}
(palavra === palavraInversa)?alert("A palavra '"+palavra+"' é um palíndromo!"):alert("A palavra '"+palavra+"' não é um palíndromo!\n\n"+palavra+"\n"+palavraInversa)