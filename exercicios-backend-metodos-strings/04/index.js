let identificador = "13";
let nome = "José silva costa";
let email = "      jose@email.com  ";

//O padrão do identificador são seis dígitos 
//e caso o número não possua essa quantidade, complete com zero a esquerda;

let identificadorSeis = identificador.padStart(6, "0")
console.log(identificadorSeis)

//O nome e sobrenome precisam sempre começar com letra maiúscula;
let nomeArray = nome.split(" ")


for (let index = 0; index < nomeArray.length; index++) {
    let item = nomeArray[index];
    let nomeMaiusculo = ""

    nomeMaiusculo = item[0].toUpperCase()
    let restoDoNome = item.toLowerCase()
    let nomeMinusculoo = (restoDoNome.replace(restoDoNome[0], nomeMaiusculo))
    console.log(nomeMinusculoo)
}



//O e-mail não pode ter espaços em branco;

let emailFormatado = email.trim()

console.log(emailFormatado)