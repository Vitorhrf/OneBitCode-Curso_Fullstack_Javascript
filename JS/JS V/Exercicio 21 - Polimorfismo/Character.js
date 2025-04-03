class Character {
    constructor(nome, vida, ataque, defesa){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }

    atacar(character){
        if(this.ataque - character.defesa > 0){
            character.vida -= this.ataque - character.defesa
            console.log(`Ataque efetuado com sucesso!
Dano causado: ${this.ataque - character.defesa}
Agora o ${character.nome} possui ${character.vida} pontos de vida!`)
            this._line()
        }
        else{
            console.log(`O ataque não desferiu dano!`)
            this._line()
        }
    }
     _line(){
        console.log("----------------------------------------------------------------")
    }
}

export default Character