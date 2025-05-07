const input = document.getElementById('input')
const resultInput = document.getElementById('result')

export function calculate(){
    resultInput.value = 'Error'
    resultInput.classList.add('error')

    const resultado = eval(input.value)
    
    resultInput.value = resultado
    resultInput.classList.remove('error')
}
