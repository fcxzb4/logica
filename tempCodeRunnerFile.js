const input = require("prompt-sync")();
console.log("escolha a seua forma de pagamento \n 1-credito \n 2- debito \n 3- a vista \n 4- pix \n 5- boleto bancario \n carteira digital  ")
let menu = input("escolha a forma de pagamento:");

switch (menu) {
  case "credito":
    console.log("compra valida");
    break;
  case "debito":
    console.log("compra valida");
    break;
  case "a vista":
    console.log("compra valida");
    break;
  case "pix":
    console.log("compra valida");
    break;
  case "boleto bancario":
    console.log("compra valida");
    break;
  case "carteira digital":
    console.log("compra valida");
    break;
  default:
    console.log("compra invalida");
    break;
}
