/*Problema
Retornando se o número é maior ou menor.
*/

//Solução
let maiorOuigual = (number = Number, number2=Number) =>{
  if(number === number2 ){
    console.log("("+ number, number2 +")"+ true);
  }else{ 
    console.log(number, number2, false);
  }
}


maiorOuigual(2,2);