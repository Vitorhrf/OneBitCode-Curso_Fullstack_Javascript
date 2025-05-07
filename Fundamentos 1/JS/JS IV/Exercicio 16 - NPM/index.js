const prompt = require('prompt-sync')()
const dayjs = require('dayjs')
let dataNasc = dayjs(prompt("Digite uma data de nascimento: "))
const hoje = dayjs()

let idade = hoje.diff(dayjs(dataNasc),'year')
let aniversario = dayjs(dataNasc).add(idade + 1, 'year')
let dias = aniversario.diff(hoje,'days') + 1
aniversario = dayjs(aniversario).format('DD/MM/YYYY')
dataNasc = dayjs(dataNasc).format('DD/MM/YYYY')

console.log(`A data digitada é: ${dataNasc} 
A idade atual é: ${idade} 
O proximo aniversario é: ${aniversario}
Faltam ${dias} dias para o proximo aniversario!`)
