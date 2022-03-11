import { Jogador } from "./jogador.js";

export class Time {
    static numeroJogadores = 0;
    time;
    _jogador;
    jogadores = new Array();

    set jogador(nomeJogador){
        if(nomeJogador instanceof Jogador){
            this._jogador = nomeJogador;
            this.jogadores.push(nomeJogador);
        }
    }

    get time(){
        return this.time;
    }

    get jogadores(){
        return this.jogadores;
    }

    constructor(time){
        this.time = time;
        Time.numeroJogadores++;
    }


}