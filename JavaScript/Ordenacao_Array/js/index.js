/*<input type="text" id="inpNumero">
<button class="btn btn-info" id="btnIncluir">Incluir</button>
<button class="btn btn-info" id="btnOrdenar">Ordenar</button>
<ul id="ulArray" class="mt-5">

</ul> */

let vetNumeros = [];

const inpNumero = document.querySelector("#inpNumero");
const btnIncluir = document.querySelector("#btnIncluir");
const btnOrdenar = document.querySelector("#btnOrdenar");
const ulArray = document.querySelector("#ulArray");

function adicionaElemento(ul, texto){
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("col-3");
    li.classList.add("d-inline");
    li.textContent = texto;
    ul.appendChild(li);    
}

function exibirVetor(){
    ulArray.innerHTML = "";
    // for(let i = 0; i < vetNumeros.length - 1; i++){
    //     adicionaElemento(ulArray,vetNumeros[i]);
    // }
    for (num of vetNumeros){
        adicionaElemento(ulArray,num);
    }
}

function ordenar(){
    for (teste in vetNumeros){
        console.log(teste);
    }
    
    for (let i = 0; i< vetNumeros.length - 1; i++){
        for (let j = i + 1; j < vetNumeros.length; j++){
            if(vetNumeros[j] < vetNumeros[i]){
                let troca = vetNumeros[i];
                vetNumeros[i] = vetNumeros[j];
                vetNumeros[j] = troca;
            }
        }
    }
}

btnIncluir.addEventListener("click", () => {
    const num = Number(inpNumero.value);
    vetNumeros.push(num);
    exibirVetor();
    inpNumero.value = "";
    inpNumero.focus();    
});

btnOrdenar.addEventListener("click", () =>{
    
    ordenar();
    exibirVetor();
});