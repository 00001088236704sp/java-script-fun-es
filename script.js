// VARIAVEIS - PT.1
// tipos de váriaveis que PODEM MUDAR DE VALOR
// var utilizada escopo global
// var

// let utilizada escopo local
// let

// váriavel que NÃO PODE MUDAR DE VALOR
// const


// tipos de dado:
// Number -> tipo para números
// String -> tipo para Textos, sempre entre 'texto' ou "texto"
// Boolean -> true ou false

// declaração de variaveis:
// = -> atribuição de valores
// constante do tipo String/texto:
// const meuNome = 'Leonardo';
// alert(meuNome)

// variavel do tipo Number/numero;
// let minhaIdade = 28;
// alert(minhaIdade);

// variavel do tipo Boolean/verdadeiro ou falso;
// let fumante = false;
// alert(fumante);

// reatribuição de valores (let -> valor variavel):
// fumante = true;
// alert(fumante);

// 1 -> declare uma let com o texto "ola mundo" chamada "mensagemInicial"
// 2 -> declare uma variavel que NÃO muda de valor chamada "dtNasc" que
// receberá a sua data de nascimento em forma de texto.

// 1
// let mensagemInicial = "ola mundo!"
// alert(mensagemInicial);

// 2
// const dtNasc = '19/06/1997';
// alert(dtNasc)




//OPERAÇÕES COM VARIAVEIS - PT.2
//operações com Number
// const primeiraIdade = '8';
// const segundaIdade = '2';

// const somaDasIdades = primeiraIdade + segundaIdade;
// console.log('aqui a soma', somaDasIdades);

// const subtracaoDasIdades = primeiraIdade - segundaIdade;
// console.log('aqui a subtracao', subtracaoDasIdades)

// const multiplicacaoDasIdades = primeiraIdade * segundaIdade;
// console.log(multiplicacaoDasIdades);

// const divisaoDasIdades = primeiraIdade / segundaIdade;
// alert(divisaoDasIdades)

// operações com String
// const profLeo = "Leonardo";
// const profMoises = "Moises";
// // o simbolo de "+" quando aplicado a texto, realiza a concatenação dos valores.
// const mensagemFinal = 'Ola ' + profLeo + ' e '  + profMoises + ' como vocês estão?'
// console.log(mensagemFinal)

//operação com Boolean
//== -> comparação
// console.log(2 == 2); //true
//!= -> diferença
//console.log(2 != 2); //false

//=== -> comparação de valores e TIPO (ESTRITAMENTE IGUAL);
// console.log(2 === '2') //false
// console.log(2 === 2) //true
// console.log('2' === '2') //true

//OPERAÇÕES MATEMÁTICAS COM VARIAVEIS - PT.3

//o computador segue as regras matematicas mult./divisão primeiro e dps soma/sub.
// const resultadoOperacao = 5+2*1+6/2;
// console.log(resultadoOperacao)

// const resultadoOperacaoDois = ((5 + 2) * (1 + 6) / 2)
// console.log(resultadoOperacaoDois)

//ESTRUTURA CONDICIONAL - PT.4 (if)
//IF - se

// if ('leo' != 'moises') {

//     if (2 != 3) {

//         console.log('segundo condicao traviscott')

//         if (4 == 4) {
//             console.log('terceira condição')
//         }
//     }

//     console.log('primeira condicao piterodatilo!!')
// }

//1
//verifique se 5 é ESTRITAMENTE igual a "5",
//se for, verifique se 2 e igual 2
//caso todos sejam satisfeito, mostre "todos iguais, Dougras!"

//2
//verifique se 'leao' é igual a 'leao',
//se for, verifique se 42 é igual a "42".
//caso todos sejam satisfeitos, mostre "leao e 42 iguais"

//1
// if(5 === "5") {
//     if(2 == 2) {
//         console.log('todos iguais, dougras!')
//     }
//     console.log('os cinco são iguais!')
// }

//2
// if('leao' === 'leao') {
//     if(42 == '42'){
//         console.log('leoa e 42 iguais!')
//     }
// }

// && -> e -> * (condições todas serem satisfeitas)
// 1*1*1*1*1*0 = 0

// || -> ou -> + (qualquer uma das condições ser satisfeita)
// 1+1+1+1+1+0 = 1

// if (2 === 2 && 2 === '2') {
//     console.log('entrei no if do E!')
// }

// if (2 === 2 || 2 === '2') {
//     console.log('entrei no if do OU!')
// }


// if ((2 === '2' && 5 == 5) || 2 === 2) {
//     console.log('entrei no 3 condicoes');
// }



//ESTRUTURA CONDICIONAL - PT.4 (if else)

// if (2 === 2 && 2 === '2') { //false
//     console.log('entrei no if do E!')
// }
// else { //se o if for false, entra no else
//     console.log('entrei no else!')
// }

// if (2 === 2 || 2 === '2') { //true
//     console.log('entrei no if do OU!')
// }
// else { //se if true, NÃO ENTRA NO ELSE
//     console.log('entrei no else!')
//}

// if ((2 === '2' && 5 == 5) || 2 === 2) { //true, faz o && primeiro, depois o || (&& -> *, || -> +)
//     console.log('entrei no 3 condicoes');
// }
//else { //se if true, NÃO ENTRA NO ELSE
//     console.log('entrei no else!')
// }


//ESTRUTURA CONDICIONAL - PT.5 (if else if)
//o else if pode ser colocado diversas vezes, mas o else apenas uma, pois ele
//e a negação do IF que está sendo validado, o else só pode se repetir se
//ele estivar em if-else aninhado. 

// if (2 === 2 && 2 === '2') { 
//     console.log('entrei no if do E!')
// }
// else if(5 === '5') { 
//     console.log('entrei no else if!')
// }
// else {
//     console.log('nao entrei em nd')
// }

// if (2 === 2 || 2 === '2') {
//     console.log('entrei no if do OU!')
// }
// else if(3 != 4) { 
//     console.log('entrei no else!')
// }

// if ((2 === '2' && 5 == 5) || 2 === 2) { //true, faz o && primeiro, depois o || (&& -> *, || -> +)
//     console.log('entrei no 3 condicoes');
// }
//else if(5 === 5) { //se if true, NÃO ENTRA NO ELSE
//     console.log('entrei no else!')
// }

//ESTRUTURA CONDICIONAL - PT.6 (switch-case)
// const minhaIdade = 5;
// switch (minhaIdade) {
//     case 10:
//         console.log('tem 10 anos');
//         break;
//     case 11:
//         console.log('tem 11 anos');
//         break;
//     case 28:
//         console.log('tem 28 anos!');
//         break;
//     default:
//         console.log('idade nao encontrada');
//         break;
// }

//considere os valores entre 1 e 5 para seu switch;
//caso o usuario digite algum desses valores(1 até 5), o sistema 
//deve mostrar a mesma quantidade de vezes a palavra "dougras"
//se não, escrever "vacilou dougras"


// const num = 4;
// switch (num) {
//     case 1:
//         console.log('dougras')
//         break;
//     case 2:
//         console.log('dougras dougras')
//         break;
//     case 3:
//         console.log('dougras dougras dougras')
//         break;
//     case 4:
//         console.log('dougras dougras dougras dougras')
//         break;
//     case 5:
//         console.log('dougras dougras dougras dougras dougras')
//         break;
//     default:
//         console.log('vacilou dougras')
//         break;
// }


//LOOP DE REPETIÇÃO - PT.6 (for)
//é um loop com final determinado.

// var. controle ; regra parada ; regra para cada loop
// for (let indice = 0 ; indice <= 5 ; indice++) {
//     //saída
//     console.log( indice * indice);
// }

//faça tabuada do 7.

// for (let indice = 0; indice <= 10; indice++) {
//     console.log(indice * 7);
// }

//mostre todos os pares de 0 a 100
//Axioma: todo numero divisivel por 2 é PAR.
// % -> resto de uma divisão.

// for (let indice = 0; indice <= 100; indice++) {
//     if (indice % 2 == 1) {
//         console.log('par', indice)
//     }
// }

//fatorial
// var fatorial = 5;
// var resultado = 1;

// for(let indice = 1; indice <= fatorial ; indice++) {
//     resultado = resultado * indice;
//     console.log(resultado);
// }

// for(let indice = fatorial; indice >= 1 ; indice--) {
//     resultado = resultado * indice;
//     console.log(resultado);
// }


//LOOP DE REPETIÇÃO - PT.6 (while)
//loop não tem um fim determinado.


let contador = 0;
//enquanto
while (contador <= 100) {
    console.log('contador: ', contador);
    contador++;
}

