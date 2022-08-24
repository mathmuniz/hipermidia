const btnFilter = document.querySelector('#btnFilter');
const btnFilter2 = document.querySelector('#btnFilter2');
const btnReduce = document.querySelector('#btnReduce');

const numeros = [3, 30, 90, 10, 2, 3, 51, 8, 7, 11, 15, 22, 27];

btnFilter.addEventListener('click', () => {
    // const numerosMaior20 = numeros.filter(function(valor){
    //       return valor > 20;
    // });

    // const numerosMaior20 = numeros.filter(function(valor, indice){
    //       return (valor > 20) && (indice % 2 == 0);
    // }); 

    // const numerosMaior20 = numeros.filter((valor, indice) => (valor > 20) && (indice % 2 == 0));

    const numerosMaior20 = numeros.filter(valor => valor > 20);      

    console.log(numerosMaior20);

    //Filtrar os valores maiores que 20 nas posições pares
});

btnFilter2.addEventListener('click', () => {
    const produtos = [
        {descricao: 'Arroz', preco: 15.69},
        {descricao: 'Feijao', preco: 8.5},
        {descricao: 'Macarrão', preco: 7.45},
        {descricao: 'Fubá', preco: 4.87},
        {descricao: 'Leite', preco: 8.8},
        {descricao: 'Ovo', preco: 6.87}
    ];

    //Retorne os produtos que tem descrição com 6 letras ou mais

    // const produtos6Letras = produtos.filter(prod => prod.descricao.length >= 6);

    // console.log(produtos6Letras);

    //retorne os produtos cuja descrição termine com o*/
    const produtosDescO = produtos.filter(prod => {
        //return prod.descricao.toLocaleLowerCase().endsWith('o');
        return prod.descricao[prod.descricao.length - 1].toLocaleLowerCase() == 'o';
    
    });

    console.log(produtosDescO);
});

btnReduce.addEventListener('click', () =>{
    const produtos = [
        {descricao: 'Arroz', preco: 15.69},
        {descricao: 'Feijao', preco: 8.5},
        {descricao: 'Macarrão', preco: 7.45},
        {descricao: 'Fubá', preco: 4.87},
        {descricao: 'Leite', preco: 8.8},
        {descricao: 'Ovo', preco: 6.87}
    ];

    const total = produtos.reduce((acumulador, prod) =>{
        acumulador = acumulador + prod.preco;
        return acumulador;
    }, 0);

    console.log(total);
});