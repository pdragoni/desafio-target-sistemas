/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

// Resolução:
const string = "Desafio Target Sistemas";

// array vazio que irá armazenar os caracteres invertidos
const invertida = [];

// iterando sobre cada caractere da string, de trás para frente
for (let i = string.length - 1; i >= 0; i--) {
  invertida.push(string[i]);
  // .push adiciona um novo elemento no final do array.
}

// .join() junta todos os elementos do array em uma string, sem espaços entre os caracteres
const result = invertida.join("");

// exibindo a string invertida no console
console.log(result);

/*
  Resultado:
  sametsiS tegraT oifaseD
*/
