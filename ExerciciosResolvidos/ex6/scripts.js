/*Problema
Retornando o Inverso do valor.
*/

//Solução
let inverso = (...value) =>{
  if(typeof(value) == 'string'){
    console.log(`É esperado um valor booleano ou numerico`);   
  }else if(typeof(value) == 'boolean'){
    console.log(!value)
  }else{
    console.log(-value); 
  }
}
inverso(false);
