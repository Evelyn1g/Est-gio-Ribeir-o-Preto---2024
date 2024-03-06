/*
  Escreva um programa que inverta os caracteres de um string.


  IMPORTANTE:
  
  a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
  
  b) Evite usar funções prontas, como, por exemplo, reverse;
  
*/

//Resposta:

function inverterString(str) {
    let novaString = '';
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i]; // Adiciona cada caractere ao final da nova string
    }
    return novaString; // Retorna a nova string invertida
}

// Teste do programa com uma string específica (altere esta string conforme necessário)
let stringOriginal = 'Olá, mundo!';
let stringInvertida = inverterString(stringOriginal);
console.log('String original:', stringOriginal);
console.log('String invertida:', stringInvertida);
