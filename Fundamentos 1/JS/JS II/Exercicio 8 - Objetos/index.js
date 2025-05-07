let opcao = 0
let imoveis = []

do{
    opcao = Number(prompt("Quantidade de imóveis cadastrados: "+imoveis.length+"\n\nSelecione uma das opções: \n1 - Salvar um imóvel\n2 - Mostrar todos os imóveis salvos\n0 - Sair"))
    switch (opcao){
        case 1:
            let imovel = {}
            imovel.nome = prompt("Digite o nome do proprietario: ")
            imovel.quartos = Number(prompt("Digite a quantidade de quartos do imovel: "))
            imovel.banheiros = Number(prompt("Digite a quantidade de banheiros do imovel: "))
            imovel.garagem = confirm("O imovel possui garagem?")
            imoveis.push(imovel)
            break
        case 2:
            let lista = ""
            for(let i = 0; i < imoveis.length; i++){
                lista += "Proprietario do imóvel "+(i+1)+": "+imoveis[i].nome+"\nQuantidade de quartos: "+imoveis[i].quartos+"\nQuantidade de banheiros: "+imoveis[i].banheiros+"\nPossui garagem?: "+(imoveis[i].garagem ? "Sim" : "Não") +"\n\n"
            }
            alert("Os imóveis salvos são: \n"+lista)
            break
        case 0:
            alert("Encerrando!")
            break
        default:
            alert("Digite uma opção valida!")
    }
}while(opcao !== 0)