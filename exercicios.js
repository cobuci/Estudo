/*
    Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.
*/

const soma = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiplicação = (a, b) => a * b;
const div = (a, b) => a / b;

//console.log(soma(1, 1)); // 2
//console.log(sub(3, 1)); // 2
//console.log(multiplicação(2, 2)); // 4
//console.log(div(10, 5)); // 2

/* 
    Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais. 
    Isósceles: Dois lados iguais. 
    Escaleno: Todos os lados são diferentes.
    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
    ao tamanho de seus lados.
    (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

const criarTriangulo = (lado1, lado2, lado3) => {
  if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    tipoTriangulo = "Escaleno";
  } else if (
    (lado1 == lado2 && lado1 != lado3) ||
    (lado1 == lado3 && lado1 != lado2) ||
    (lado2 == lado3 && lado2 != lado1)
  ) {
    tipoTriangulo = "Isósceles";
  } else if (lado1 == lado2 && lado1 == lado3) {
    tipoTriangulo = "Equilátero";
  }

  return tipoTriangulo;
};

//console.log(criarTriangulo(2, 1, 7));
//console.log(criarTriangulo(1, 1, 1));
//console.log(criarTriangulo(1, 2, 2));

/*
    Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

const elevado = (base, expoente) => Math.pow(base, expoente);
//console.log(elevado(2, 4));

/*
    Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
    e o resto da divisão destes dois valores.
*/

const dividir = (a, b) => {
  let resultado = a / b;
  let resto = a % b;

  return {
    resultado,
    resto,
  };
};

// console.log(dividir(10, 3));

/*
    Lidar com números em JavaScript pode dar muita dor de cabeça.
    Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
    importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
    um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
    que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

*/

const converterDinheiro = (entrada) => {
  return (resultado = "R$" + entrada.toFixed(2).replace(".", ","));
};

// console.log(converterDinheiro(0.30000000000000004));

/*
    Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples = (capital, taxaInicial, tempo) => {
  taxa = taxaInicial / 100;
  resultadoJurosSimples = capital * taxa * tempo;
  capitalFinal = resultadoJurosSimples + capital;

  return {
    capitalinicial: capital,
    taxaDeJuros: taxaInicial,
    tempo: tempo,
    ganhoJuros: resultadoJurosSimples,
    capitalFinal: capitalFinal,
  };
};
// console.log(jurosSimples(50, 10, 5));

const jurosCompostos = (capital, taxaInicial, tempo) => {
  taxa = taxaInicial / 100;

  capitalInicial = capital;
  for (i = 1; i <= tempo; i++) {
    resultadoJurosCompostos = capital + capital * taxa;
    capital = resultadoJurosCompostos;

    resultado = capital.toFixed(2);
  }

  return {
    capitalInicial,
    taxaDeJuros: taxaInicial,
    tempo: tempo,
    resultado,
  };
};

// console.log(jurosCompostos(10000, 1, 12));

/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, 
de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo

*/

const bhaskara = (a, b, c) => {
  resultado = [];

  raiz = b * b - 4 * a * c;

  if (raiz < 1) {
    return "Delta é negativo";
  }

  resultado1 = (-b + Math.sqrt(raiz)) / (2 * a);
  resultado2 = (-b - Math.sqrt(raiz)) / (2 * a);

  resultado.push(resultado1);
  resultado.push(resultado2);

  return resultado;
};

// console.log(bhaskara(1, 3, 2));
// console.log(bhaskara(3, 1, 2));

/*
    Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
    classificação: Todo aluno recebe uma nota de 0 a 100. 
    Alunos com nota abaixo de 40 são reprovados. 
    As notas possuem a seguinte regra de arredondamento: 
    Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
    Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 
    Por exemplo, a nota 84 será arredondada para 85,   mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, 
    ou seja, que evite a reprovação do aluno. 
    No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
 */

const sistemaNotas = (aluno, nota) => {
  if (nota > 38) {
    if (Math.ceil(nota / 5) >= 3) {
      nota = Math.ceil(nota / 5) * 5;
    }
  }

  if (nota < 40) {
    return {
      aluno,
      situacaoAluno: "Reprovado, Nota: " + nota,
    };
  } else {
    return {
      aluno,
      situacaoAluno: "Aprovado",
      nota,
    };
  }
};

//console.log(sistemaNotas("joao", 39));

/*
  Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
  ou false.

*/
const div3 = (num) => {
  if (num % 3 != 0) {
    return false;
  } else {
    return true;
  }
};
// console.log(div3(15));

/* 
  As regras para o cálculo dos anos bissextos são as seguintes:
  De 4 em 4 anos é ano bissexto;
  De 100 em 100 anos não é ano bissexto;
  De 400 em 400 anos é ano bissexto;
  Prevalecem as últimas regras sobre as primeiras.
  Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
  mensagem e retornando true ou false.
*/

function calcularAnoBissexto(ano) {
  ano4 = ano % 4 == 0;
  ano400 = ano % 400 == 0;
  ano100 = ano % 100 == 0;

  if (ano <= 0) {
    return false;
  } else if (ano400) {
    return true;
  } else if (ano100) {
    return false;
  } else if (ano4) {
    return true;
  } else {
    return false;
  }
}

/* 
  Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = (num) => {
  resultado = num;
  for (var i = 1; i < num; i++) {
    resultado *= i;
  }
  return resultado;
};

/* 
  Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
  dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

*/

const diaUtil = (dia) => {
  fimDeSemana = [1, 7, 14, 15, 22, 29];

  if (dia >= 1 && dia <= 31) {
    if (
      dia == fimDeSemana[0] ||
      dia == fimDeSemana[1] ||
      dia == fimDeSemana[2] ||
      dia == fimDeSemana[3] ||
      dia == fimDeSemana[4] ||
      dia == fimDeSemana[6]
    ) {
      return "Fim de semana";
    } else {
      return "Dia util";
    }
  } else {
    return "Dia invalido";
  }
};

/* 
  Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
  considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
  1) crianças com menos  de 10 anos pagam R$80; 
  2) conveniados com idade entre 10 e 30 anos pagam R$50; 
  3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
  4) conveniados acima de 60 anos pagam R$130
*/

const valorConvenio = (idade) => {
  custoFixo = 100;

  if (idade < 10) {
    custoIdade = 80;
  } else if (idade >= 10 && idade <= 30) {
    custoIdade = 50;
  } else if (idade > 30 && idade <= 60) {
    custoIdade = 95;
  } else {
    custoIdade = 130;
  }

  custoFinalConvenio = custoFixo + custoIdade;

  return custoFinalConvenio;
};

// console.log(valorConvenio(9));

/* 
  Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
*/
const onzeHello = () => {
  i = 1;
  while (i < 12) {
    console.log(`${i} - Hello World!`);
    i++;
  }
};

// onzeHello()

/* 

Escrever um programa para exibir os números de 1 até 50 na tela.

*/

const numeroAteCinquenta = () => {
  for (i = 1; i <= 50; i++) {
    console.log(i);
  }
};

// numeroAteCinquenta()

/* 
 Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

const parAteCem = () => {
  for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) console.log(i);
  }
};

// parAteCem()
