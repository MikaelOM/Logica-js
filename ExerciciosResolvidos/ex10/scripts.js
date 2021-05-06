/*Problema
Função que repete uma quantidade de vezes uma string;
*/

//Resolução
let simbuloMais = (num) => {
  if(typeof(num) ==='number'){
    console.log('+'.repeat(num));
  }
  else console.log("Não é aceito valores que não são Nuber");
}

simbuloMais(22);