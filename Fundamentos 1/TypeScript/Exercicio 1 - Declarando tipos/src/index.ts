const spaceships = []

function saveSpaceship(name: string, pilot: string, crewLimit: number){
    const spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [] as string[],
        inMission: false
    }
    spaceships.push(spaceship)
    alert(`Nave ${name} salva com sucesso!`)
}

function addCrewMember(spaceshipName: string, crewMember: string){
    const spaceship = spaceships.find((spaceship: {name: string}) => spaceship.name === spaceshipName)
    if (!spaceship) {
        alert("Nave não encontrada")
        return
    }

    if (spaceship.crew.length < spaceship.crewLimit) {
        spaceship.crew.push(crewMember)
    } else {
        alert("Limite de tripulantes atingido")
    }
}

function launchSpaceship(spaceshipName: string){
    const spaceship = spaceships.find((spaceship: {name: string}) => spaceship.name === spaceshipName)
    if (!spaceship) {
        alert("Nave não encontrada")
        return
    }
    if (spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)) {
        if (spaceship.inMission) {
            alert(`A Nave ${spaceship.name} já está em missão!`)
        } else {
            spaceship.inMission = true
            alert(`A Nave ${spaceship.name} foi lançada com sucesso!`)
        }
    } else {
        alert(`A Nave ${spaceship.name} não pode ser lançada com menos de ${Math.floor(spaceship.crewLimit / 3)} tripulantes a bordo! (Quantidade atual: ${spaceship.crew.length})`)
    }
}

function showSpaceships(){
    let message = "Naves Salvas:\n\n"
   spaceships.forEach((spaceship) => {
        message += `Nome: ${spaceship.name}\n`
        message += `Piloto: ${spaceship.pilot}\n`
        message += `Tripulantes: ${spaceship.crew.length}/${spaceship.crewLimit}\n`
        
        spaceship.crew.forEach((crewMember: string) => {
            message += `- ${crewMember}\n`
        })
       
        message += `Em missão: ${spaceship.inMission ? "Sim" : "Não"}\n\n`
    })
    alert(message)
}

let option: number
while (option !== 0) {
    option = parseInt(prompt("Escolha uma opção:\n1. Salvar nave\n2. Adicionar tripulante\n3. Lançar nave\n4. Mostrar naves\n0. Sair"))
    switch (option) {
        case 1:
            const name = prompt("Nome da nave:")
            const pilot = prompt("Nome do piloto:")
            const crewLimit = parseInt(prompt("Limite de tripulantes:"))
            saveSpaceship(name, pilot, crewLimit)
            break
        case 2:
            const spaceshipName = prompt("Nome da nave:")
            const crewMember = prompt("Nome do tripulante:")
            addCrewMember(spaceshipName, crewMember)
            break
        case 3:
            const launchName = prompt("Nome da nave:")
            launchSpaceship(launchName)
            break
        case 4:
            showSpaceships()
            break
        case 0:
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }
}
