//let alunos = Array(5);
let alunos = ['Fabio','Jose','Ana','Carlos','Miguel'];
// console.log(alunos);
console.log(alunos);
alunos[0] = "Fabiano";
console.log(alunos);
alunos[alunos.length] = "Vanessa";
alunos[alunos.length] = "Lucas Belizario";
alunos[alunos.length] = "João Belizario";

alunos.push("Daniel Nogueira");
alunos.unshift("Eliabe Peres");
console.log(alunos);
let removido = alunos.pop();
console.log(removido);
console.log(alunos);
removido = alunos.shift();
console.log(removido);
console.log(alunos);

