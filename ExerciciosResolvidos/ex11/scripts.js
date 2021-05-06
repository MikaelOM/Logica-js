/*Problema
Retornando o primeiro e ultimo elemento de um array.
*/

//Resolução
let primeiroEultimo = (array = []) => {
  let rray = array.filter((item,index,array) => {
    return array[item] == array[index == 0]
  })
return console.log(rray);
}
;
primeiroEultimo([07,3,2,1,'Mikael'])
