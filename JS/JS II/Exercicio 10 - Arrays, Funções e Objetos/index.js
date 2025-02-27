let vagas = []
let opcao = 0

function menu(){
    opcao = Number(prompt("Selecione uma das seguintes opções:\n\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n0 - Sair"))
    return opcao
}

function listarVagas(){
    let vagasListadas = ""
    vagas.forEach(function (vaga, indice){
        vagasListadas += "Índice: "+indice+"\nNome da vaga: "+vaga.nome+"\nQuantidade de inscritos na vaga: "+vaga.candidatos.length+"\n\n"
    })
    alert("Vagas disponíveis: \n\n"+vagasListadas)
}

function criarVaga(){
    let objeto = {
        nome: prompt("Digite o nome da vaga:"),
        descricao: prompt("Digite a descrição da vaga:"),
        dataLimite: prompt("Digite a data limite para essa vaga:"),
        candidatos: []
    }
    
    if(confirm("Deseja confirmar as informações inseridas?\n\nNome da vaga: "+objeto.nome+"\nDescrição: "+objeto.descricao+"\nData limite: "+objeto.dataLimite)){
        vagas.push(objeto)
        alert("Vaga criada com sucesso!")
    }else{
        alert("Cadastro de vaga cancelado, voltando ao menu inicial!")
    }
}

function visualizarVaga(indice){
    if(vagas[indice]){
        let listaCandidatos = ""
        vagas[indice].candidatos.forEach(function (candidato){
            listaCandidatos += candidato+"\n"
        })
        return("Índice da vaga: "+indice
            +"\nNome da vaga: "+vagas[indice].nome
            +"\nDescrição da vaga: "+vagas[indice].descricao
            +"\nData limite da vaga: "+vagas[indice].dataLimite
            +"\nQuantidade de candidatos: "+vagas[indice].candidatos.length
            +"\nCandidatos inscritos: "+listaCandidatos)
    }else{
        return("Digite um valor válido!")
    }
}

function inscreverCandidato(){
    let nomeTemporario = prompt("Digite o nome do candidato: ")
    let indice = Number(prompt("Digite o índice da vaga: "))
    if(vagas[indice]){
        if(confirm("Deseja confirmar a inscrição do "+nomeTemporario+" na seguinte vaga? \n\n"+visualizarVaga(indice))){
            vagas[indice].candidatos.push(nomeTemporario)
            alert("Candidato inscrito com sucesso!")
        }else{
            alert("Inscrição cancelada, retornando ao menu!")
        }
    }else{
        alert("Digite um índice válido!")
    }
}

function excluirVaga(){
    let indice = Number(prompt("Digite o índice da vaga: "))
    if(confirm("Deseja confirmar a exclusão dessa vaga?\n\n"+visualizarVaga(indice))){
        vagas.splice(indice, 1)
    }else{
        alert("Exclusão cancelada, retornando ao menu!")
    }
}

do{
    switch(menu()){
        case 1:
            listarVagas()
            break
        case 2:
            criarVaga()
            break
        case 3:
            alert(visualizarVaga(Number(prompt("Digite o índice da vaga:"))))
            break
        case 4:
            inscreverCandidato()
            break
        case 5:
            excluirVaga()
            break
        case 0:
            alert("Encerrando o programa!")
            break
        default:
            alert("Selecione uma opção válida!")
    }
}while(opcao !== 0)