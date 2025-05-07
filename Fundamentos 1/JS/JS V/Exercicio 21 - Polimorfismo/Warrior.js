import Character from "./Character.js"

class Warrior extends Character{
    constructor(nome, vida, ataque, defesa, escudo, posicao){
        super(nome, vida, ataque, defesa)
        this.escudo = escudo
        this.posicao = posicao
        posicao==='defesa' && (this.defesa += this.escudo)
    }
    
    ataque(character){
        if(this.posicao==='ataque'){
            super.atacar(character)
        }
        else{
            console.log("Não é possivel atacar enquanto estiver em posição de defesa!")
            this._line()
        }
    }

    mudarPosicao(posicao){
        if(posicao === 'defesa' && posicao !== this.posicao){
            this.defesa += this.escudo
        }
        else if(posicao === 'ataque' && posicao !== this.posicao){
            this.defesa -= this.escudo
        }
        this.posicao = posicao
    }
}

export default Warrior