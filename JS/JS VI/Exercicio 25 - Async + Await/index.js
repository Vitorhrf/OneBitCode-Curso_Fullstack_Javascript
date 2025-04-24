async function calculoIMC(peso, altura){
    if(typeof peso !== 'number') 
        return Promise.reject("O valor inserido para peso precisa ser um número!")
    else if(typeof altura !== 'number') 
        return Promise.reject("O valor inserido para altura precisa ser um número!")
    else 
        return (peso / (altura / 100) ** 2)
}

async function classificarIMC(peso, altura){
    try {
        const resultado = await calculoIMC(peso, altura)
        console.log(`IMC: ${resultado}`)
        if (resultado < 18.5) console.log("A classificação do IMC é: Magreza")
        else if (resultado >= 18.5 && resultado <= 24.9) console.log("A classificação do IMC é: Normal")
        else if (resultado >= 25 && resultado <= 29.9) console.log("A classificação do IMC é: Sobrepeso")
        else if (resultado >= 30 && resultado <= 39.9) console.log("A classificação do IMC é: Obesidade")
        else if (resultado > 40) console.log("A classificação do IMC é: Obesidade grave")
    } catch (err) {
        console.log(err)
    }
}

classificarIMC(100, 'a')