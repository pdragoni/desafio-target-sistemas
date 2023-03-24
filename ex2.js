/*
 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

// Resolução:

// const num = parseInt(prompt("Digite um número: ")); // recebe o número a partir da interação do usuário no navegador
// const num = 0; // número pré-definido --> teste negativo
// const num = 20; // número pré-definido --> teste negativo
// const num = 21; // número pré-definido --> teste positivo
const num = 34; // número pré-definido --> teste positivo

let a = 0; // primeiro número da sequência
let b = 1; // segundo número da sequência
let c = a + b; // terceiro número da sequência

while (c <= num) {
  // se o número informado for menor ou igual a c, então ele está na sequência de Fibonacci
  if (c === num) {
    console.log(num + " pertence à sequência de Fibonacci!");
    break; // interrompe o loop
  }
  // atualiza os valores para o próximo número da sequência
  a = b;
  b = c;
  c = a + b;
}

// se o número não foi encontrado na sequência, exibe uma mensagem
if (c > num) {
  console.log(num + " não pertence à sequência de Fibonacci.");
}

/*
  Resultado:
  34 pertence à sequência de Fibonacci!
*/