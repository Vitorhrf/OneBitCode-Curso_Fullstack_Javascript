import Character from "./Character.js"

class Mage extends Character{
    constructor(nome, vida, ataque, defesa, magia){
        super(nome, vida, ataque, defesa)
        this.magia = magia
    }
    atacar(character){
        if(this.magia + this.ataque - character.defesa > 0){
            character.vida -= this.magia + this.ataque - character.defesa
            console.log(`Ataque realizado com sucesso!
Dano efetuado: ${this.magia + this.ataque - character.defesa}
Agora o ${character.nome} possui ${character.vida} pontos de vida!`)
            this._line()
        }
        else{
            console.log("O ataque não desferiu dano!")
            this._line()
        }
    }

    curar(character){
        character.vida += 2 * this.magia
        console.log(`Cura efetuada: ${2 * this.magia} pontos de vida
O ${character.nome} agora possui ${character.vida} pontos de vida!`)
        this._line()
    }
}

export default Mage