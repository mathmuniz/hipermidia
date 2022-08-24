class Municipio{
    _id;
    _nome;

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }

    constructor(pId, pNome){
        this.id = pId;
        this.nome = pNome;
    }
}