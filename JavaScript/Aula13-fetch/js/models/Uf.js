class Uf{
    _id;
    _sigla;
    _nome;

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    
    get sigla() {
        return this._sigla;
    }
    set sigla(value) {
        this._sigla = value;
    }
   
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }

    constructor(pId, pSigla, pNome){
        this.id    = pId;
        this.sigla = pSigla;
        this.nome  = pNome;
    }
}