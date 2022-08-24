/* <input type="text" id="inpNome" class="form-control col-md-4">
<button id="bntIncluir" class="btn btn-info mt-3">Incluir</button>
<button id="bntExibir" class="btn btn-info mt-3">Exibir</button>
<button id="bntExcluir" class="btn btn-info mt-3">Excluir</button>

<ul id="ulArray">

</ul> */

let nomes = [];
let inpNome = document.querySelector('#inpNome');
let bntIncluir = document.querySelector('#bntIncluir');
let bntExibir = document.querySelector('#bntExibir');
let bntExcluir = document.querySelector('#bntExcluir');
let ulArray = document.querySelector('#ulArray');

function exibir(){
    ulArray.textContent = "";
    for(let i = 0; i < nomes.length; i++){
        let li = document.createElement('li');
        li.textContent = nomes[i];
        ulArray.appendChild(li);
    }
}

function excluir(pNome){
    let resultado = false;
    if (pNome !== ""){
        let index = nomes.indexOf(pNome);
        if (index != -1){
            nomes.splice(index,1);
            resultado = true;
        }
    }
    return resultado;
}

bntIncluir.addEventListener('click', function(){
  let nome = inpNome.value;
  nomes.push(nome);
  inpNome.value = "";
  inpNome.focus();
 // exibir();
});

bntExibir.addEventListener('click', () => {
    exibir();
});

bntExcluir.addEventListener('click', () =>{
    let nome = inpNome.value;
    if (nome === ""){
        alert("Informe o nome a ser excluido");
    }else{
        if (excluir(nome)){
            alert("Nome excluido com sucesso");
        }else{
            alert(`não foi possivel excluir o nome ${nome}`);
        }
    }
});
