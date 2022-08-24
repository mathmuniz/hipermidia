const inpData = document.querySelector("#inpData");
inpData.value = new Date().toISOString().slice(0, 10);

const btnDiaSemana = document.querySelector("#btnDiaSemana");
const lblDiaSemana = document.querySelector("#lblDiaSemana");

function FDiaSemana(pData) {

    let ano = Number(pData.slice(0, 4));
    let mes = Number(pData.slice(6, 7)) - 1;
    let dia = Number(pData.slice(8, 10));
    let data = new Date(ano, mes, dia);

    let diaSemana = data.getDay();

    let diaSemanaStr = '';

    switch (diaSemana) {
        case 0:
            diaSemanaStr = 'Domingo';
            break;
        case 1:
            diaSemanaStr = 'Segunda';
            break;
        case 2:
            diaSemanaStr = 'Terça';
            break;
        case 3:
            diaSemanaStr = 'Quarta';
            break;
        case 4:
            diaSemanaStr = 'Quinta';
            break;
        case 5:
            diaSemanaStr = 'Sexta';
            break;
        case 6:
            diaSemanaStr = 'Sábado';
            break;

        default:
            diaSemanaStr = 'Dia inválido';
            break;
    }

    return diaSemanaStr;
}

btnDiaSemana.addEventListener('click', () => {
    let dateStr = inpData.value;
    lblDiaSemana.textContent = FDiaSemana(dateStr);
    //alert('teste');
});


{/* <input type="number" id="inpMatricula" >
<button id="btnMatricula" class="btn btn-primary">Verificar</button>  
<label id="lblMatricula"></label>  */}

const inpMatricula = document.querySelector("#inpMatricula");
const btnMatricula = document.querySelector("#btnMatricula");
const lblMatricula = document.querySelector("#lblMatricula");

function mesPagamento(pMatricula) {
    let matriculaInt = Number(pMatricula);
    let ultimoDigito = matriculaInt % 10;
    let mesPagamento = "";

    switch (ultimoDigito) {
        case 0:
            mesPagamento = "Janeiro";
            break;
        case 1:
            mesPagamento = "Fevereiro";
            break;
        case 2:
            mesPagamento = "Março";
            break;
        case 3:
            mesPagamento = "Abril";
            break;
        default:
            mesPagamento = "Maio";
    }
    return mesPagamento;
}

btnMatricula.addEventListener('click', () => {
    const matricula = inpMatricula.value;
    lblMatricula.textContent = mesPagamento(matricula);
});