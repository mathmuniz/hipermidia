const ibge = new Ibge();

const btnPesquisar = document.querySelector('#btnPesquisar');

let carregarDados = async () => {
  const ufs = await ibge.Ufs();
  const selUf = document.querySelector('#selUfs');
  const optTodos = document.createElement("option");
  optTodos.innerText = "Todos";
  optTodos.value = "T";
  selUf.options.add(optTodos,'T');  

  ufs.forEach(uf => {
    let opt = document.createElement('option');
    opt.innerText = uf.nome;
    opt.value = uf.id;
    selUf.options.add(opt);
  });
};

carregarDados();

btnPesquisar.addEventListener('click', async () => {
    const tdBodyMun = document.querySelector('#tdBodyMun');
    const selUf = document.querySelector('#selUfs');
    
    let municipios = [];

    if (selUf.value == 'T'){
        municipios = await ibge.Municipios();
    } else {
        municipios = await ibge.Municipios(selUf.value);
    }

    let linhasTemplate = '';

    municipios.forEach(mun => {
        linhasTemplate += `
                            <tr>
                               <td>${mun.id}</td>
                               <td>${mun.nome}</td>
                            </tr>
                            `
    });
    tdBodyMun.innerHTML = linhasTemplate;
});