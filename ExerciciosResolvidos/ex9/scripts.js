/*Problema
Retorna um array com a quantidade de um elemento, essa quantidade é passada no 
parametro.
*/

//Resolução
let repetir = (par,par2) =>{
 if(typeof(par2) === 'number'){
  let array =[];
  for(let i= 0; i < par2; i++){
   array.push(par)
  }
  return console.log(array);
 }
 else console.log("O segundo parametro deve ser do tipo number")
}
repetir("Mikael",22)