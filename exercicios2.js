/* 
    Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
    função) e com ponto de exclamação "!" no final.
 */

const cumprimentar = (nome) => console.log(`Olá, ${nome} !`);

// cumprimentar("Leonardo");
// cumprimentar("Maria");

/* 

    Escreva uma função que receba a idade de uma pessoa em anos 
    e retorne a mesma idade em dias. 

*/

const converterIdadeEmAnosParaDias = (idade) => console.log(idade * 365);

// converterIdadeEmAnosParaDias(25)
// converterIdadeEmAnosParaDias(70)

/*
 Desenvolva uma função que recebe dois parâmetros, 
 um é a quantidade de horas trabalhadas por um funcionário num mês,
  e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
 X", em que X é o quanto o funcionário ganhou no mês.
 
*/

const calcularSalario = (horasTrabalhadas, salarioHora) => {
  salario = horasTrabalhadas * salarioHora;
  return console.log(`Salário igual a R$ ${salario}`);
};

// calcularSalario(150, 40.5);

/* 
    Crie uma função que recebe um número (de 1 a 12 e 
        retorne o mês correspondente como uma string. 
        Por exemplo, se a entrada for 2,
         a função deverá retornar "fevereiro", pois este é o 2° mês.
 */

const nomeDoMes = (mes) => {
  if (mes == 1) nome = "Janeiro";
  else if (mes == 2) nome = "Fevereiro";
  else if (mes == 3) nome = "Março";
  else if (mes == 4) nome = "Abril";
  else if (mes == 5) nome = "Maio";
  else if (mes == 6) nome = "Junho";
  else if (mes == 7) nome = "Julho";
  else if (mes == 8) nome = "Agosto";
  else if (mes == 9) nome = "Setembro";
  else if (mes == 10) nome = "Outubro";
  else if (mes == 11) nome = "Novembro";
  else if (mes == 12) nome = "Dezembro";
  else nome = "Número invalido";

  return console.log(nome);
};

//nomeDoMes(4)
//nomeDoMes(93)

/* 
    Crie uma função que receba dois números e 
    retorne se o primeiro é maior ou igual ao segundo 
*/

const maiorOuIgual = (a, b) => {
  if (a > b || a === b) result = true;
  else result = false;

  return console.log(result);
};
//maiorOuIgual(0, 0) // retornará true
//maiorOuIgual(0, "0") // retornará false
//maiorOuIgual(5, 7) // retornará false

/* 
Escreva uma função que receba um valor booleano ou numérico. 
Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. 
Por exemplo, se for fornecido 1, o retorno será -1. 
Se o parâmetro de entrada não for de nenhum dos tipo acima, 
retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
 */

const inverso = (parametro) => {
  if (parametro === true) resultado = false;
  else if (parametro === false) resultado = true;
  /// falta inverter o numero
  else
    resultado =
      "Booleano ou número esperados, mas o parâmetro é do tipo string";

  return console.log(resultado);
};

const multiplicar = (n1, n2) => {
  if (n1 >= 0 && n2 >= 0) resultado = n1 * n2;
  else resultado = "Valor Invalido";

  return console.log(resultado);
};

//multiplicar(5, 5) // retornará 25
//multiplicar(0, 7) // retornará 0

/* 
    Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
    que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

const repetir = (parametro, vezes) => {
  resultado = [];
  for (let index = 0; index < vezes; index++) {
    resultado.push(parametro);
  }

  console.log(resultado);
};

/* 
    repetir("código", 2) // retornará ["código", "código"]
    repetir(7, 3) // retornará [7, 7, 7]
 */

/* 
    Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
    quantidade especificada no parâmetro.
 */
const simboloMais = (n) => {
  resultado = [];
  for (let index = 0; index < n; index++) {
    resultado = resultado + "+";
  }
  console.log(resultado);
};
/* 
    simboloMais(2); // retornará "++"
    simboloMais(4); // retornará "++++"
 */

/*     
    Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
    gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
    sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
    não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
 */

const funcaoDaSorte = (n) => {
  sorteado = Math.floor(Math.random() * 10 + 1);

  if (n == sorteado) resultado = "Parabéns! o número sorteado foi " + sorteado;
  else resultado = "Que pena! o número sorteado foi " + sorteado;

  console.log(resultado);
};
