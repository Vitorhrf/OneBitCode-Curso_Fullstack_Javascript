function calculoIMC(peso, altura){
    return new Promise((resolve, reject) => {
        if(typeof peso !== 'number'){
            reject("O valor inserido para peso precisa ser um número!")
        }else if(typeof altura !== 'number'){
            reject("O valor inserido para altura precisa ser um número!")
        }else{
            resolve(peso / (altura / 100) ** 2)
        }
    })
}

function classificarIMC(peso, altura){
    calculoIMC(peso, altura).then(resultado => {
        console.log(`IMC: ${resultado}`)
        let classificacao = ''
        if (resultado < 18.5) {
            classificacao = 'Magreza'
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            classificacao = 'Normal'
        } else if (resultado >= 25 && resultado <= 29.9) {
            classificacao = 'Sobrepeso'
        } else if (resultado >= 30 && resultado <= 39.9) {
            classificacao = 'Obesidade'
        } else if (resultado > 40) {
            classificacao = 'Obesidade grave'
        }
        console.log(`A classificação do IMC é: ${classificacao}`)
    }).catch(erro => {
        console.log(`Erro: ${erro}`)
    })
    console.log("Chamando promise...")
}

classificarIMC(100, 183)