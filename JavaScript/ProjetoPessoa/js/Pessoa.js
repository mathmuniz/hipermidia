class Pessoa{
    _id;
    _nome;
    _salario;

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
    
    get salario() {
        return this._salario;
    }
    set salario(value) {
        if(value < 0)
          throw new Error('Informe salários maiores que ZERO');

        this._salario = value;
    }

    constructor(pId, pNome, pSalario){
        this.id = pId;
        this.nome = pNome;
        this.salario = pSalario;
    }
}