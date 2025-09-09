// const senha = 'abacaju'
// let tentativas = 3
// let senha_dg

// do{
//     senha_dg = input('tente seu insolente:  ')
//     tentativas--;
//     if( senha_dg != senha ){
//         console.log(`Senha incorreta. Você tem ${tentativas} tentativa(s) restante(s).`)
//     }
// }while(senha_dg != senha && tentativas > 0)
//     if(senha_dg == senha ){
//         console.log("voce acertou ")
//     }else{
//         console.log("voce e uma bixona")
//     }

// function calcularFatorial(amen) {
//   let resultado = 1;
//   for (let i = amen; i > 0; i--) {
//     resultado = resultado * i;
//   }
//   return resultado;
// }

// let user;
// do{
//     user = parseInt(input("digite numero:  "))
// }while(user <= 0);

// console.log(`resultado do fatorial ${amen} é ${calcularFatorial(amen)} `)

// function analisarNumero(pnc){
//      if(pnc/2 == 0){
//         console.log("receba pai par")
//      }
//      if(pnc/2 == 1){
//         console.log("receba pai impar")
//      };
//      if(pnc < 0){
//        console.log("receba pai negativo")
//      }
//      else{
//         console.log("receba pai positivo")
//      }
// }

// console.log("receba pai")

// function ehPrimo(n){
//     for(n > 0){
//       return " e se f"
//    }

// }

// console.log(ehPrimo(parseInt(input("Digite um número: "))));

// const receba = "aprender programacao exige pratica e dedicacao constante";
// const aleluia = "abcdefghijklmnopqrstuvwxyz."

// for (let i = 0; i < receba.length ; i++){
//     console.log(parseInt(receba[i]))
//   for(let j = 0; j )
// }

const input = require("prompt-sync")();

const arrayA = [3, 10, 15, 22, 8, 19, 30, 42];
const arrayB = [5, 12, 1, 25, 18, 7, 27, 33];

const arrayPar = [];
const arrayImpar = [];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] % 2 === 0) {
        arrayPar.push(arrayA);
    } else {
        console.log("impar");
    }
}
for (let i = 0; i < arrayB.length; i++) {
    if (arrayB[i] % 2 === 0) {
        arrayPar.push(i);
    } else {
        console.log("impar");
    }
}

console.log(arrayPar);