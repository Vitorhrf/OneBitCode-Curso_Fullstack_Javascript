const nome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campo = prompt("Qual o campo de estudo do recruta?")
const nasc = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com sucesso!\n\n" +
    "Nome: "+nome+
    "\nSobrenome: "+sobrenome+
    "\nCampo de estudo: "+campo+
    "\nIdade: "+(2025-nasc)
    )

const number1 = prompt("Digite o primeiro número: ")
const number2 = prompt("Digite o segundo número: ")

alert(
    "O resultado das operações são: \n\n"+
    number1+" + "+number2+" = "+(parseFloat(number1)+parseFloat(number2))+"\n"+
    number1+" - "+number2+" = "+(parseFloat(number1)-parseFloat(number2))+"\n"+
    number1+" * "+number2+" = "+(parseFloat(number1)*parseFloat(number2))+"\n"+
    number1+" / "+number2+" = "+(parseFloat(number1)/parseFloat(number2))
)