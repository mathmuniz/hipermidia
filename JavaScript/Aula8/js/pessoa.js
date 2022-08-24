class Pessoa{
    _id;
    _nome;
    _salario;
    _sobreNome;

    get id() {
        return this._id;
    }
    set id(value) {
        if (value <= 0){
            throw new Error("Informe um id maior que zero.");
        }
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
        this._salario = value;
    }
    
    get sobreNome() {
        return this._sobreNome;
    }
    set sobreNome(value) {
        this._sobreNome = value;
    }

    nomeCompleto(){
        return `${this.nome} ${this.sobreNome}`;
    }

    getSalarioMoeda(){
        return `R$ ${this.salario}`;
    }

}