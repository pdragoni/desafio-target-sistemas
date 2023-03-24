/*
 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

// Resolução:

// Objeto informado no enunciado
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Calcula o valor total do faturamento mensal
// Object.values transforma o objeto em um array de valores
// em seguida reduce() soma todos os valores do array
const valorTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Cria um novo objeto para armazenar os percentuais de representação de cada estado
const percentuaisPorEstado = {};

// Calcula o percentual de representação de cada estado e armazena no novo objeto
// for...in itera sobre as propriedades de um objeto
for (let estado in faturamentoPorEstado) {
  percentuaisPorEstado[estado] = (faturamentoPorEstado[estado] / valorTotal) * 100;
}

// Exibe o resultado no console/terminal
console.log(percentuaisPorEstado);
// console.log(Object.values(percentuaisPorEstado).reduce((acc, valor) => acc + valor, 0))

/*
  Resultado:
{
  SP: 37.52845624346716,
  RJ: 20.291360952794975,
  MG: 16.170548370275323,
  ES: 15.028481414968068,
  Outros: 10.981153018494469
}

*/