let pessoas = [];

const btnIncluir = document.querySelector("#btnIncluir");
const bodyPessoa = document.querySelector("#bodyPessoa");
const inpNome = document.querySelector("#inpNome");
const inpSobreNome = document.querySelector("#inpSobreNome");
const inpSalario = document.querySelector("#inpSalario");

function limpar(){
    inpNome.value = "";
    inpSobreNome.value = "";
    inpSalario.value = "";
}

function exibir(){
    bodyPessoa.innerHTML = "";

    for(p of pessoas){
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdSobreNome = document.createElement("td");
        let tdSalario = document.createElement("td");
        let tdNomeCompleto = document.createElement("td");

        tdId.innerText = p.id;
        tdNome.innerText = p.nome;
        tdSobreNome.innerText = p.sobreNome;
        tdSalario.innerText = p.salario;
        tdNomeCompleto.innerText = p.nomeCompleto();
        
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdSobreNome);
        tr.appendChild(tdSalario);
        tr.appendChild(tdNomeCompleto);
        bodyPessoa.appendChild(tr);
    }
}

btnIncluir.addEventListener("click", () => {
  let p = new Pessoa();
  p.id = pessoas.length + 1;
  p.nome = inpNome.value;
  p.sobreNome = inpSobreNome.value;
  p.salario =  Number(inpSalario.value);

  pessoas.push(p);
  exibir();
  limpar();
  inpNome.focus();
});