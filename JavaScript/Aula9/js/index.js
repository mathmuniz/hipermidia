const btnMap = document.querySelector("#btnMap");

const numeros = [3, 30, 90, 10, 2, 3, 51, 8, 7, 11, 15, 22, 27];

btnMap.addEventListener('click', () => {
//    const mapArray = numeros.map(function(valor/*, indice, array*/){
//         return valor * valor;
//    });

//somente os pares
    // const mapArray = numeros.map(function(valor){
    //     if (valor % 2 == 0)
    //       return valor;
    // });

//    const mapArray = numeros.map(valor => valor * valor);    
//    console.log(mapArray);

    const produtos = [
        {descricao: 'Arroz', preco: 100},
        {descricao: 'Feijão', preco: 8.50},
        {descricao: 'Macarrão', preco: 7.45},
        {descricao: 'Fubá', preco: 4.87},
        {descricao: 'Leite', preco: 5.8},
        {descricao: 'Ovo', preco: 6.87}       
    ];
    //Retorne apenas as descrições dos produtos?
    // let desc = produtos.map((prod) => {
    //     return prod.descricao;
    // });

   // console.log(desc);
    //aumento de 10%
    let aumento = produtos.map((prod) => {
        let newProd = {...prod};
        newProd.preco = newProd.preco * 1.1; 
        return newProd;
    });
    console.log(aumento);
    console.log(produtos);
});