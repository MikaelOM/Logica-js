/*Problema
Realizando a multiplicação dos números sem o operados de multiplicação.
*/

//Solução
let mult = (num,num2)=>{
  if(num<0 || num2<0 || typeof(num) !== 'number' || typeof(num2) !== 'number'){
    console.log("Só é aceito numeros meiores ou igual a zero");
  }else{
    let result = 0;
    for(let i = 1; i<=num2 ;i ++){
      result += num;
    } 
    return console.log(result);
  }
}
mult(1,2);
