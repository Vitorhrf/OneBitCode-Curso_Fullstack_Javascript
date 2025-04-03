import Character from "./Character.js";

class Thief extends Character{
    atacar(character){
        if(2 * (this.ataque - character.defesa) > 0){
            character.vida -= 2 * (this.ataque - character.defesa)
            console.log(`Ataque realizado com sucesso!
Dano efetuado: ${2 * (this.ataque - character.defesa)}
Agora o ${character.nome} possui ${character.vida} pontos de vida!`)
            this._line()
        }
        else{
            console.log("O ataque não desferiu dano!")
            this._line()
        }
    }
}

export default Thief