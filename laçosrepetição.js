const input = require("prompt-sync")();



const senha = 'abacaju'
let tentativas = 3 
let senha_dg 

do{
    senha_dg = input('tente seu insolente:  ')
    tentativas--;
    if( senha_dg != senha ){
        console.log(`Senha incorreta. Você tem ${tentativas} tentativa(s) restante(s).`)
    }
}while(senha_dg != senha && tentativas > 0) 
    if(senha_dg == senha ){
        console.log("voce acertou ")
    }else{
        console.log("voce e uma bixona")
    }
