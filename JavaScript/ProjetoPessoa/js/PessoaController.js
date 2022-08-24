class PessoaController{
    _pessoas = [];
    _tablePessoas;
    _spanTotal;

    get pessoas() {
        return this._pessoas;
    }
    set pessoas(value) {
        this._pessoas = value;
    }

    get tablePessoas() {
        return this._tablePessoas;
    }
    set tablePessoas(value) {
        this._tablePessoas = value;
    }      
    get spanTotal() {
        return this._spanTotal;
    }
    set spanTotal(value) {
        this._spanTotal = value;
    }  
    
    bind(){
        let linhas = '';
        this.tablePessoas.innerHTML = '';
        this.pessoas.map(pe => {
            linhas += 
        `<tr>
            <td>${pe.id}</td>
            <td>${pe.nome}</td>
            <td>${Number(pe.salario).toFixed(2)}</td>
            <td><button class="btn btn-info" data-id="${pe.id}">Excluir</button></td>
            </tr>
        ` ;
        });
        this.tablePessoas.innerHTML = 
        `<table class="table">
           <thead>
             <tr>
               <th>Código</th>
               <th>Nome</th>
               <th>Salario</th>
               <th>Excluir</th>               
             </tr>
           </thead>

           <tbody>
             ${linhas}
           </tbody>
         </table>                                    
        `;
        this.associaEventos();

        let total = 0;

        total = this.pessoas.reduce((total,pessoa) => {
            total += Number(pessoa.salario);
            return total; 
        },0);
        
        if (this.spanTotal){
            this.spanTotal.innerHTML = `Total salários: R$ ${total.toFixed(2) }`;
        } else {
          console.log("Faltou informar o span de totalização");
        }           
    }

    adicionaPessoa(pes){
        pes.id = this.pessoas.length + 1;
        this.pessoas.push(pes);
        this.bind();
    }

    excluirPessoa(id){
        this.pessoas.forEach((pes, i) =>{
            if (pes.id === id){
                this.pessoas.splice(i,1);
                this.bind();
                return;
            }
        });
    }

    associaEventos(){
        const btnsExcluir = document.querySelectorAll("[data-id]");
        btnsExcluir.forEach((btn) => {
           btn.addEventListener("click", () => {
              this.excluirPessoa(Number(btn.dataset.id));
           }) ;
        });
    }

    _pessoasImportar = [
        new Pessoa(50,'Zuleica',3547.32),
        new Pessoa(51,'Antonio',1548.15),
        new Pessoa(52,'Valéria',6578.22),
        new Pessoa(53,'Matheus',2478.87),
        new Pessoa(54,'Rafael',3214.03),
        new Pessoa(55,'Fernando',4571.14),
        new Pessoa(56,'Fabiano',3624.09)
    ];

    importarPessoas(){
        this.pessoas = this.pessoas.concat(this._pessoasImportar);
        this.bind();
    }

    pesquisaIniciais(inic){
        let pesq = this.pessoas.filter(pes => {
            return pes.nome.toUpperCase().startsWith(inic.toUpperCase());
        });
        this.pessoas = pesq;
        this.bind();
    }

}