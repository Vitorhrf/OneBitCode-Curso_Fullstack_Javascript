const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

const dir = path.resolve(__dirname + "/notes/")

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}

function newNote(){
    console.log("Pressione Ctrl + C para finalizar a anotação e salvar.")
    const note = readline.createInterface({input: process.stdin, output: process.stdout})
    let noteContent = ""
    note.on('line', (input) => {
        noteContent += input + "\n"
    })
    note.on('SIGINT', () => {
        note.question('Deseja realmente sair? (s/n) ', (resposta) => {
            if (resposta.trim().toLocaleLowerCase() === 's') {
                note.question("Nomeie o arquivo (ex: nota): ",(nome) =>{
                    fs.writeFileSync(path.resolve(dir+`/${nome}.txt`), noteContent)
                    console.log("\nAnotação salva com sucesso!")
                    note.close()
                    setTimeout(menuPlay, 1000)
                })
            } else {
                console.log("Você escolheu continuar.")
            }
        })
    })
}

function readNote(nameNote){
    try {
        const readedNote = fs.readFileSync(path.resolve(dir+"/"+nameNote),"utf-8")
        console.log("\nO conteudo da nota ", nameNote, " é:\n",readedNote)
    } catch (error) {
        console.log("\nArquivo não encontrado!\n\nError: ",error.message,"\n")
    }
    
}

function deleteNote(nameNote){
     try {
        fs.unlinkSync(path.resolve(dir+"/"+nameNote))
        console.log("\nArquivo removido com sucesso!\n")
    } catch (error) {
        console.log("\nArquivo não encontrado!\n\nError: ",error.message,"\n")
    }
    
}





function menuPlay(){
    const menu = readline.createInterface({input: process.stdin, output: process.stdout})

    menu.question(`Selecione uma das opções abaixo:
1 - Criar uma nova anotação
2 - Listas as anotações salvas
3 - Ler uma anotação específica
4 - Excluir uma anotação específica
0 - Encerrar\n`, (input) => {
        console.log()
        switch (input){
            case "1":
                menu.close()
                newNote()
                break
            case "2":
                fs.readdirSync(dir).forEach((note) => console.log(note))
                console.log()
                menu.close()
                setTimeout(menuPlay, 500)
                break
            case "3":
                menu.question("Digite o nome do arquivo (ex: nota.txt): ", (nome) =>{
                    readNote(nome)
                    menu.close()
                    setTimeout(menuPlay, 500)
                })
                break
            case "4":
                menu.question("Digite o nome do arquivo a ser excluido (ex: nota.txt): ", (nome) =>{
                    deleteNote(nome)
                    menu.close()
                    setTimeout(menuPlay, 500)
                })
                break
            case "0":
                console.log("Encerrando...")
                menu.close()
                break
            default:
                console.log("Digite uma opção valida!")
                menu.close()
                setTimeout(menuPlay, 500)
        }
    })
}
menuPlay()