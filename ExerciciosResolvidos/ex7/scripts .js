/*Problema
Função que retorna se o numero está entre o minimo e o maximo.
*/

//Resolução
const itsBetween = (number, min, max, inclus=false) => {
  let result;
  if(number>=min && number<=max){
    result = true;
  }else{
    result = false;
  }
  console.log(number, min, max, result)
}

itsBetween(10,10,10);