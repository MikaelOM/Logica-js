/*Problema
Retornando o nome do mês.
*/

//Solução
let months =['janeiro', 'fevereiro', 'março', 
             'abril','maio','junho','agosto',
             'setembro','outubro','novembro',
             'dezembro'];

const monthnumber = (month) =>{
  if (month > 0 && month <= 12){
     console.log(months[month-1]); 
  }else{
    console.log('Invalid Number!');
  };
}

monthnumber(1);


