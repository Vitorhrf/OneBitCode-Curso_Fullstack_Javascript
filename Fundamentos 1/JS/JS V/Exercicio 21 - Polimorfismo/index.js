import Character from "./Character.js";
import Thief from "./Thief.js";
import Mage from "./Mage.js";
import Warrior from "./Warrior.js";

const Heroi = new Thief('Heroi', 100, 10, 5)
const Vilao = new Character('Vilao', 100, 10, 5)
const Mago = new Mage('Mago', 100, 10, 5, 15)
const Guerreiro = new Warrior('Guerreiro', 100, 12, 10, 20, 'ataque')

Heroi.atacar(Vilao)
Heroi.atacar(Vilao)
Heroi.atacar(Vilao)
Mago.curar(Vilao)
Guerreiro.atacar(Vilao)
Mago.atacar(Guerreiro)
Guerreiro.mudarPosicao('defesa')
Mago.atacar(Guerreiro)