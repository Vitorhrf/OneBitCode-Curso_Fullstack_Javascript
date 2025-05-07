const planets = [];
function savePlanet(nome, coordenadas, situacao) {
    planets.push({
        nome,
        coordenadas,
        situacao,
        satelites: []
    });
}
function editSituationPlanet(nome, situacao) {
    try {
        const planet = findPlanet(nome);
        planet.situacao = situacao;
    }
    catch (error) {
        alert(error);
    }
}
function findPlanet(nome) {
    const planet = planets.find(planet => planet.nome === nome);
    if (!planet) {
        throw new Error("Planeta não encontrado.");
    }
    return planet;
}
function addSatellite(nome, satelite) {
    try {
        const planet = findPlanet(nome);
        if (planet.satelites.includes(satelite)) {
            alert("Esse satélite já existe.");
        }
        else {
            planet.satelites.push(satelite);
        }
    }
    catch (error) {
        alert(error);
    }
}
function removeSatellite(nome, satelite) {
    try {
        const planet = findPlanet(nome);
        if (planet.satelites.includes(satelite)) {
            const i = planet.satelites.indexOf(satelite);
            planet.satelites.splice(i, 1);
        }
        else {
            alert("O satelite informado não existe.");
        }
    }
    catch (error) {
        alert(error);
    }
}
function showPlanets() {
    let listPlanets = '';
    planets.forEach((planet) => {
        let listSatelites = '';
        planet.satelites.forEach((satelite) => {
            listSatelites += `\n - ${satelite}`;
        });
        listPlanets += `Planeta: ${planet.nome}
Coordenadas: ${planet.coordenadas.join(', ')}
Situação: ${planet.situacao}
Satelites: ${listSatelites || "Nenhum"}
---------------------------------\n\n`;
    });
    alert(listPlanets);
}
let opcao = 0;
do {
    opcao = parseInt(prompt(`Digite uma das opções a seguir
        1 - Adicionar um novo planeta
        2 - Alterar a situação do planeta 
        3 - Adicionar um satelite a um planeta existente
        4 - Excluir um satelite de um planeta existente
        5 - Listar todos os planetas
        0 - Sair`));
    switch (opcao) {
        case 1:
            const nome1 = prompt("Digite o nome do planeta:");
            const coordenadas = [
                parseFloat(prompt("Coordenada 1:")),
                parseFloat(prompt("Coordenada 2:")),
                parseFloat(prompt("Coordenada 3:")),
                parseFloat(prompt("Coordenada 4:"))
            ];
            const situacao = prompt("Digite a situação (habitado, habitavel, inabitavel, inexplorado):");
            savePlanet(nome1, coordenadas, situacao);
            break;
        case 2:
            const nome2 = prompt("Digite o nome do planeta:");
            const novaSituacao = prompt("Nova situação (habitado, habitavel, inabitavel, inexplorado):");
            if (novaSituacao && ["habitado", "habitavel", "inabitavel", "inexplorado"].includes(novaSituacao)) {
                editSituationPlanet(nome2, novaSituacao);
            }
            else {
                alert("Situação inválida. Tente novamente com uma das opções válidas.");
            }
            break;
        case 3:
            const nome3 = prompt("Digite o nome do planeta:");
            const novoSatelite = prompt("Digite o nome do novo satélite:");
            addSatellite(nome3, novoSatelite);
            break;
        case 4:
            const nome4 = prompt("Digite o nome do planeta:");
            const sateliteRemover = prompt("Digite o nome do satélite a ser removido:");
            removeSatellite(nome4, sateliteRemover);
            break;
        case 5:
            showPlanets();
            break;
        case 0:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);
