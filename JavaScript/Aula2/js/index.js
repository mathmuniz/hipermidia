
const inpNome     = document.querySelector("#inpNome");
const btnMensagem = document.querySelector("#btnMensagem");
const inpMensagem = document.querySelector("#inpMensagem");

console.log(btnMensagem);


btnMensagem.addEventListener('click', function() {
    let nome = inpNome.value;
    inpMensagem.value = `Olá ${nome}`;
});

btnMensagem.addEventListener('mousemove', function (){
    alert('Passei o mouse no botão');
})