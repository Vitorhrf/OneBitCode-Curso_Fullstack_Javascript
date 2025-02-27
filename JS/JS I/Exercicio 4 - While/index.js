const nome = prompt("Digite seu nome: ")
let cidade = ""
while(confirm("Já visitou alguma cidade?") === true){
    cidade += prompt("Qual o nome da cidade?")+"\n"
}

(cidade!=="")?alert("As cidades visitadas de "+nome+" são as seguintes:\n\n"+cidade):alert("O "+nome+" não visitou nenhuma cidade!")