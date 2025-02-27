
function escalarJogador(){
    const escalacao = document.querySelector('#escalacao')
    const inputs = document.querySelectorAll('#inputs > input')
    
    let ul = document.createElement('ul')
    if(!document.getElementById('camisa-'+inputs[2].value)){
        if(confirm("Deseja confirmar a inclusão desse jogador?\n\n"+
            "Posição: "+inputs[0].value+
            "\nJogador: "+inputs[1].value+
            "\nCamisa: "+inputs[2].value
        )){
            let liPosicao = document.createElement('li')    
            liPosicao.innerText = 'Posição: '+inputs[0].value
            liPosicao.id = 'posicao-'+inputs[2].value
            ul.appendChild(liPosicao)

            let liJogador = document.createElement('li')
            liJogador.innerText = 'Jogador: '+inputs[1].value
            liJogador.id = 'nome-'+inputs[2].value
            ul.appendChild(liJogador)

            let liCamisa = document.createElement('li')
            liCamisa.innerText = 'Camisa: '+inputs[2].value
            liCamisa.id = 'numero-'+inputs[2].value
            ul.appendChild(liCamisa)

            ul.id = 'camisa-'+inputs[2].value
            escalacao.appendChild(ul)
            
            inputs.forEach(function (input){
                input.value = ""
            })
            alert("Jogador escalado com sucesso!")
        }else{
            alert("Inclusão cancelada!")
        }
    }else{
        alert("Já existe um jogador com esse número de camisa!")
    }
}

function removerJogador(){
    const escalacao = document.querySelector('#escalacao')
    const input = document.querySelector('#input-remover > input')
    const jogador = document.getElementById('camisa-'+input.value)
    if(jogador){
        if(confirm("Deseja confirmar a exclusão desse jogador?\n\n"+
            document.getElementById('posicao-'+input.value).innerText+
            "\n"+document.getElementById('nome-'+input.value).innerText+
            "\n"+document.getElementById('numero-'+input.value).innerText
        )){
            escalacao.removeChild(jogador)
            input.value = ""
            alert("Jogador removido com sucesso!")
        }else{
            alert("Exclusão cancelada!")
        }
    }else{
        alert("Número da camisa inválido!")
    }
}