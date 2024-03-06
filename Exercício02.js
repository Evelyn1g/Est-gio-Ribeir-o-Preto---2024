/*
  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
  (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
  ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
  
  
  
  IMPORTANTE:
  
  Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function verificaFibonacci(numero) {
    // Inicia a sequência de Fibonacci com os dois primeiros valores
    let fib = [0, 1];
    
    // Calcula os próximos valores da sequência de Fibonacci até que o último valor seja maior ou igual ao número fornecido
    while (fib[fib.length - 1] < numero) {
        let proximoValor = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(proximoValor);
    }
    
    // Verifica se o número fornecido está presente na sequência de Fibonacci
    if (fib.includes(numero)) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Teste da função com um número específico (altere este valor conforme necessário)
let numeroInformado = 21;
console.log(verificaFibonacci(numeroInformado));
