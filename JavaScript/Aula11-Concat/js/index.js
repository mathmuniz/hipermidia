const btnConcat = document.querySelector('#btnConcat');

btnConcat.addEventListener('click', () => {
    const a1 = [1, 2, 3];
    const a2 = [4, 5, 6];

    // for(let num of a2){
    //     a1.push(num);
    // }    
    const a3 = a1.concat(a2,7,8,9,'Fabiano',{codigo: 1, descricao: 'teste'});
    console.log(a3);
});