const pesContr = new PessoaController();
const btnIncluir = document.querySelector("#btnIncluir");
const btnImportar = document.querySelector("#btnImportar");
const btnPesquisar = document.querySelector("#btnPesquisar");

pesContr.tablePessoas = document.querySelector("#tbPessoa");
pesContr.spanTotal = document.querySelector("#spTotal");

btnIncluir.addEventListener("click",() => {
    const inpNome = document.querySelector("#inpNome");
    const inpSalario = document.querySelector("#inpSalario");

    const pes = new Pessoa(0, inpNome.value, inpSalario.value);
    pesContr.adicionaPessoa(pes);
    inpNome.value = "";
    inpSalario.value = 0;
    inpNome.focus();
});

btnImportar.addEventListener("click",() => {
    pesContr.importarPessoas();
});

btnPesquisar.addEventListener("click", () => {
    const inpBuscar = document.querySelector("#inpBuscar");
    pesContr.pesquisaIniciais(inpBuscar.value);
});

