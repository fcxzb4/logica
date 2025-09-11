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


// const arrayA = [3, 10, 15, 22, 8, 19, 30, 42];
// const arrayB = [5, 12, 1, 25, 18, 7, 27, 33];

// const arrayPar = [];
// const arrayImpar = [];

// for (let i = 0; i < arrayA.length; i++) {
//     if (arrayA[i] % 2 === 0) {
//         arrayPar.push(arrayA);
//     } else {
//         console.log("impar");
//     }
// }
// for (let i = 0; i < arrayB.length; i++) {
//     if (arrayB[i] % 2 === 0) {
//         arrayPar.push(i);
//     } else {
//         console.log("impar");
//     }
// }

// console.log(arrayPar);


// const input = require("prompt-sync")();
// const tick = [
//     [0, 1, 2]
//     [0, 1, 2]
//     [0, 1, 2]
// ];
// let guest1 = "x";
// let guest2 = "o";
// let ongame = true; 

// for(let i = 0; i < tick ; i++){

// }

// const carro = { 
//     nome:"uno",
//     ano:"2010"
// }
// delete carro.ano ;
//     console.log(carro.ano)

const input = require("prompt-sync")();

const  produtos = [
  { id: 1,  nome: "Arroz Tipo 1 5kg",        categoria: "Grãos",      preco: 24.90, unidade: "pacote", quantidadeEmEstoque: 48, perecivel: false, descricao: "Arroz branco polido, marca tradicional." },
  { id: 2,  nome: "Feijão Carioca 1kg",      categoria: "Grãos",      preco: 7.50,  unidade: "pacote", quantidadeEmEstoque: 60, perecivel: false, descricao: "Feijão carioca de qualidade." },
  { id: 3,  nome: "Açúcar Refinado 1kg",     categoria: "Açúcar",     preco: 4.20,  unidade: "pacote", quantidadeEmEstoque: 80, perecivel: false, descricao: "Açúcar branco refinado." },
  { id: 4,  nome: "Óleo de Soja 900ml",       categoria: "Óleos",      preco: 6.99,  unidade: "garrafa", quantidadeEmEstoque: 34, perecivel: false, descricao: "Óleo de soja para uso culinário." },
  { id: 5,  nome: "Leite Integral 1L",       categoria: "Laticínios", preco: 3.80,  unidade: "caixa",   quantidadeEmEstoque: 120, perecivel: true,  descricao: "Leite UHT integral." },
  { id: 6,  nome: "Manteiga 200g",           categoria: "Laticínios", preco: 9.50,  unidade: "tablete", quantidadeEmEstoque: 26, perecivel: true,  descricao: "Manteiga com sal." },
  { id: 7,  nome: "Pão de Forma 500g",       categoria: "Padaria",    preco: 7.00,  unidade: "pacote", quantidadeEmEstoque: 40, perecivel: true,  descricao: "Pão de forma fatiado." },
  { id: 8,  nome: "Ovos Branco 12un",        categoria: "Hortifruti", preco: 8.90,  unidade: "dúzia",   quantidadeEmEstoque: 70, perecivel: true,  descricao: "Ovos tamanho médio." },
  { id: 9,  nome: "Maçã Gala 1kg",           categoria: "Hortifruti", preco: 6.99,  unidade: "kg",      quantidadeEmEstoque: 22, perecivel: true,  descricao: "Maçã Gala fresca." },
  { id: 10, nome: "Banana Prata 1kg",        categoria: "Hortifruti", preco: 4.50,  unidade: "kg",      quantidadeEmEstoque: 50, perecivel: true,  descricao: "Banana prata para consumo diário." },
  { id: 11, nome: "Frango Resfriado 1kg",    categoria: "Carnes",     preco: 12.90, unidade: "kg",      quantidadeEmEstoque: 15, perecivel: true,  descricao: "Frango corte practice." },
  { id: 12, nome: "Carne Bovina 1kg",        categoria: "Carnes",     preco: 29.99, unidade: "kg",      quantidadeEmEstoque: 10, perecivel: true,  descricao: "Coxão mole ou similar." },
  { id: 13, nome: "Macarrão Espaguete 500g", categoria: "Massas",     preco: 3.30,  unidade: "pacote", quantidadeEmEstoque: 90, perecivel: false, descricao: "Espaguete tradicional." },
  { id: 14, nome: "Molho de Tomate 340g",    categoria: "Condimentos",preco: 2.80,  unidade: "vidro",   quantidadeEmEstoque: 75, perecivel: false, descricao: "Molho de tomate temperado." },
  { id: 15, nome: "Café Torrado 500g",       categoria: "Bebidas",    preco: 16.50, unidade: "pacote", quantidadeEmEstoque: 33, perecivel: false, descricao: "Café torrado e moído." },
  { id: 16, nome: "Chá Mate 20 saquinhos",   categoria: "Bebidas",    preco: 4.00,  unidade: "caixa",   quantidadeEmEstoque: 60, perecivel: false, descricao: "Sachets de chá mate." },
  { id: 17, nome: "Água Mineral 1.5L",       categoria: "Bebidas",    preco: 2.50,  unidade: "garrafa", quantidadeEmEstoque: 200,perecivel: false, descricao: "Água mineral sem gás." },
  { id: 18, nome: "Sabão em Pó 1kg",         categoria: "Limpeza",    preco: 9.90,  unidade: "pacote", quantidadeEmEstoque: 45, perecivel: false, descricao: "Sabão em pó para roupas." },
  { id: 19, nome: "Detergente Líquido 500ml",categoria: "Limpeza",    preco: 3.20,  unidade: "frasco",  quantidadeEmEstoque: 55, perecivel: false, descricao: "Detergente neutro para louças." },
  { id: 20, nome: "Papel Higiênico 12un",    categoria: "Higiene",    preco: 18.00, unidade: "pacote", quantidadeEmEstoque: 30, perecivel: false, descricao: "Rolo clássico 30m." }
];


let carrito = {
    cliente:"bolsonabo",
    produtosCarro:[],
    totalCal: 0,
};

for( let i = 0; i < carrito.length ; i++ ){
     

}