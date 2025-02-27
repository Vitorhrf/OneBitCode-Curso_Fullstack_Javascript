const themeBtn = document.getElementById('themeSwitcher')
const game = document.getElementById('game')
const play = document.getElementById('play')
const jogadores = document.getElementById('jogadores')
const root = document.querySelector(':root')
const body = document.getElementById('body')
let player1 = ''
let player2 = ''
let linhaVencedora = null
const quadrantes = document.querySelectorAll('.quadrante')
const turnInput = document.getElementById('turnInput')
const turn = document.getElementById('turn')

const board = [
    [document.getElementById("q0"), document.getElementById("q1"), document.getElementById("q2")],
    [document.getElementById("q3"), document.getElementById("q4"), document.getElementById("q5")],
    [document.getElementById("q6"), document.getElementById("q7"), document.getElementById("q8")]
]

play.addEventListener('click', function (){
    jogadores.classList.add('hidden')
    game.classList.remove('hidden')
    turn.classList.remove('hidden')
    let name1 = document.getElementById('jogador1').value
    let name2 = document.getElementById('jogador2').value
    name1 === "" ? player1 = "Jogador \u03A7" : player1 = name1
    name2 === "" ? player2 = "Jogador \u25EF" : player2 = name2
    turnInput.value = player1
    quadrantes.forEach(function (element){
        element.addEventListener('click', handleClick)
    })
})

themeBtn.addEventListener('click', function(){
    if(body.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#dadade')
        root.style.setProperty('--border-color', '#888')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#3fad36')
        body.dataset.theme = 'light'
    }else{
       root.style.setProperty('--bg-color', '#212529')
       root.style.setProperty('--border-color', '#666')
       root.style.setProperty('--font-color', '#f1f5f9')
       root.style.setProperty('--primary-color', '#0e8b03')
       body.dataset.theme = 'dark'
   }
})

function handleClick(ev){
    const element = ev.target
    if(element.innerText === ""){
        if(turnInput.value === player1){
            element.innerText = "\u03A7"
            turnInput.value = player2
        }else{
            element.innerText = "\u25EF"
            turnInput.value = player1
        }

        linhaVencedora = verificador()
        
        if(empate()){
            linhaVencedora !== null ? destacarVitoria(linhaVencedora) : destacarEmpate() 
        }
    }
}

function verificador(){
    for (let i = 0; i < 3; i++){
        if(board[i][0].innerText !== "" && board[i][0].innerText === board[i][1].innerText && board[i][1].innerText === board[i][2].innerText){
            return board[i]
        }
        if(board[0][i].innerText !== "" && board[0][i].innerText === board[1][i].innerText && board[1][i].innerText === board[2][i].innerText){
            return [board[0][i], board[1][i], board[2][i]]
        }
    }
    if(board[0][0].innerText !== "" && board[0][0].innerText === board[1][1].innerText && board[1][1].innerText === board[2][2].innerText){
        return [board[0][0], board[1][1], board[2][2]]
    }
    if(board[0][2].innerText !== "" && board[0][2].innerText === board[1][1].innerText && board[1][1].innerText === board[2][0].innerText){
        return [board[0][2], board[1][1], board[2][0]]
    }
    return false
}

function empate(){
    for (let i = 0; i < quadrantes.length; i++){
        if(quadrantes[i].innerText === ""){
            return false
        }
    }
    return true
}

function destacarVitoria(linhaVencedora) {
    linhaVencedora.forEach(function (element){
        element.classList.add("vencedor")
    })
    quadrantes.forEach(function (element){
        element.removeEventListener('click', handleClick)
    })
    linhaVencedora[0].innerText === '\u03A7' ? turnInput.value = player1 : turnInput.value = player2
    document.getElementById('turnH1').innerText = "O Vencedor é: "
    turnInput.classList.add("vencedorInput")
}

function destacarEmpate() {
    quadrantes.forEach(function(element) {
        element.classList.add("empate")
    })
    document.getElementById('turnH1').innerText = "O jogo empatou!"
    turnInput.value = "Reinicie o jogo"
}

document.getElementById('restart').addEventListener('click', function(){
    jogadores.classList.remove('hidden')
    game.classList.add('hidden')
    turn.classList.add('hidden')
    quadrantes.forEach(function(element){
        element.innerText = ""
        element.classList.remove("empate")
    })
    document.getElementById('turnH1').innerText = "Jogador da vez: "
    turnInput.classList.remove("vencedorInput")
    if(linhaVencedora !== null){
        linhaVencedora.forEach(function(element){
            element.classList.remove('vencedor')
        })
    }
    linhaVencedora = null
    
    document.getElementById('jogador1').value = ''
    document.getElementById('jogador2').value = ''
})