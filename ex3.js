// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


// Resolução:
const { readFileSync } = require('fs'); // biblioteca para leitura de arquivos
// leitura do arquivo JSON
const dados = JSON.parse(readFileSync('dados.json'));
// console.log(dados);

// filtra apenas os dias com faturamento (dados é um array)
// dessa maneira já desconsidera os dias que não tiveram faturamento, como pedido no enunciado.
const diasFaturamento = dados.filter((objeto) => objeto.valor > 0);
console.log(diasFaturamento);

// calcula o menor e o maior faturamento
// Math.min() e Math.max() são métodos de array que recebem uma lista de números e retornam o menor e o maior, respectivamente
// map() é um método de array que recebe uma função callback e retorna um novo array com os valores retornados pela função
const menorFaturamento = Math.min(...diasFaturamento.map(objeto => objeto.valor));
const maiorFaturamento = Math.max(...diasFaturamento.map(objeto => objeto.valor));

// reduce() é um método de array que recebe uma função callback e um valor inicial, então o valor parcial é dividio pelo número de elementos do array, chegando à media
const mediaMensal = diasFaturamento.reduce((acc, objeto) => acc + objeto.valor, 0) / diasFaturamento.length;

// filtra apenas os dias com faturamento acima da média mensal0
const diasAcimaMedia = diasFaturamento.filter((objeto) => objeto.valor > mediaMensal);

// Por fim exibe o resultado no console/terminal:
console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`); // toFixed() converte número em string, fixando 2 casas decimais
console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMedia.length}`);

/* Resultados
Menor faturamento diário: R$ 373.78
Maior faturamento diário: R$ 48924.24
Número de dias com faturamento acima da média mensal: 10
*/