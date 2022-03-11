export class Jogador {
    nome;
    _posicao;
    _numeroCamisa;

    get posicao(){
       return this._posicao;
    }

    get _numeroCamisa(){
        return this._numeroCamisa;
    }

    constructor (nome, posicao, camisa){
        this.nome = nome;
        this._posicao = posicao;
        this._numeroCamisa = camisa;
    }
    
}