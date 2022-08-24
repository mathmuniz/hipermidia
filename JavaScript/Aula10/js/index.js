const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

const btnSplice = document.querySelector("#btnSplice");

btnSplice.addEventListener('click', () => {
    console.log(nomes);
    //nomes.splice(-1,1);//pop();
    //nomes.shift();
    //nomes.splice(0,1);
    // nomes.splice(nomes.length,0,'Vitor');
    // nomes.unshift('Vanessa');
    nomes.splice(0,0,'Vanessa');
    console.log(nomes);
    // const removidos = nomes.splice(2,3);
    // console.log(nomes, removidos);

    // const removidos = nomes.splice(-2,2);
    // console.log(nomes, removidos);

    // const removidos = nomes.splice(0,Number.MAX_VALUE);
    // console.log(nomes, removidos);    

    // const removidos = nomes.splice(3,0,'Henrique','Miguel');
    //  console.log(nomes, removidos);      



});
