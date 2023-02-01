const numeroCartao = '1311223313113998';

let numeroAparenteInicio = numeroCartao.slice(0, 4)
let numeroAparenteFinal = numeroCartao.slice(12, 16)

if (numeroCartao.length === 16) {
    console.log(`${numeroAparenteInicio}********${numeroAparenteFinal}`)
} else { console.log("Insira 16 dígitos") }


