/* <input type="text" id="inpNum1">
<input type="text" id="inpNum2">
<button id="btnVerifica">Verifica</button>
<input type="text" id="inpMaior"> */

const inpNum1  = document.querySelector("#inpNum1");
const inpNum2  = document.querySelector("#inpNum2");
const inpMaior = document.querySelector("#inpMaior");
const btnVerifica = document.querySelector("#btnVerifica");

btnVerifica.addEventListener('click', function(){
    let num1 = parseFloat(inpNum1.value);
    let num2 = parseFloat(inpNum2.value);
    let maior = 0;

    if (num1 > num2){
        maior = num1
    }else{
        maior = num2
    }
    inpMaior.value = maior;
});

