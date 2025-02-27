const valor = parseInt(prompt("Digite o valor em metros a ser convertido: "))
const medida = prompt("Digite as iniciais da medida a ser convertida: \n\nMilímetro (mm)\nCentímetro (cm)\nDecímetro (dm)\nDecâmetro (dam)\nHectômetro (hm)\nQuilômetro (km)")

switch(medida){
    case "mm":
        alert("O valor digitado em metros é "+valor+"m\n\nO valor convertido em milímetros é: "+(valor*1000)+"mm")
        break
    case "cm":
        alert("O valor digitado em metros é "+valor+"m\n\nO valor convertido em centímetros é: "+(valor*100)+"cm")
        break
    case "dm":
        alert("O valor digitado em metros é "+valor+"m\n\nO valor convertido em decímetros é: "+(valor*10)+"dm")
        break
    case "dam":
        alert("O valor digitado em metros é "+valor+"m\n\nO valor convertido em decâmetros é: "+(valor/10)+"dam")
        break
    case "hm":
        alert("O valor digitado em metros é "+valor+"m\n\nO valor convertido em hectômetros é: "+(valor/100)+"hm")
        break
    case "km":
        alert("O valor digitado em metros é "+valor+"m\n\nO valor convertido em quilômetros é: "+(valor/1000)+"km")
        break
    default:
        alert("A medida digitada é invalida!")
}