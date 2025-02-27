// Teste de Velocidade
const veiculo1 = prompt("Digite o nome do primeiro veiculo: ")
const veiculo2 = prompt("Digite o nome do segundo veiculo: ")
const vel1 = parseFloat(prompt("Digite a velocidade do primeiro veiculo: "))
const vel2 = parseFloat(prompt("Digite a velocidade do segundo veiculo: "))

alert("Veiculo 1: "+veiculo1+"\nVeiculo 2: "+veiculo2+"\nVelocidade 1: "+vel1+"\nVelocidade 2: "+vel2)

if(vel1 > vel2){
    alert("O "+veiculo1+" é mais rápido que o "+veiculo2)
}else if(vel1<vel2){
    window.alert("O "+veiculo2+" é mais rápido que o "+veiculo1)
}else{
    window.alert("O "+veiculo1+" e o "+veiculo2+" possuem a mesma velocidade!")
}

// Cálculo de Dano
const player = prompt("Digite o nome do seu personagem: ")
const power = parseFloat(prompt("Digite o poder de ataque do seu personagem: "))

const enemy = prompt("Digite o nome do inimigo: ")
const life = parseFloat(prompt("Digite a quantidade de pontos de vida do inimigo: "))
const defense = parseFloat(prompt("Digite o poder de defesa do inimigo: "))
const shield = prompt("O inimigo possui escudo? Y(sim)/N(não)")
let damage = 0

if(power>defense){
    if(shield === "Y"){
        damage = (power-defense)/2
    }else{
        damage = power-defense
    }
}
alert("Relatorio de combate:\n\nO ataque de "+player+" desferiu "+damage+" de dano\nA vida do inimigo caiu para "+(life-damage))