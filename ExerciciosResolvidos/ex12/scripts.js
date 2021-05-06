//Problema
/*
Função que retorna as operações matemáticas simples
*/

//Solução
let operacoes = (num, num2) =>{
  if(typeof(num)==='number' && typeof(num2) === 'number'){
    console.log(`
       Soma: ${num+num2} 
       Subtração: ${num-num2}
       Multiplicação: ${num*num2} 
       Divisão: ${num/num2}`);
  }else{
    console.log('Só é aceito valores numéricos')
  }
}

operacoes(10,5);