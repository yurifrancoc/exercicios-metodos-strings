const celular = 92413368;
// formataCelular = {
//     "10": function (celular){
//         let celularString = celular.toString()
//         let celularFormatado = ""
//         let celularDDD = celularString.slice(0, 2)
//     let celularPrimeiros = celularString.slice(2, 6)
//     let celularFinais = celularString.slice(6, 10)
//     celularFormatado = `(${celularDDD}) 9 ${celularPrimeiros}-${celularFinais}`
//     },

// }

// formataCelular[celularString.length](celularString)

//REGEX   

//Adicione o 9 quando não existir 
let celularString = celular.toString()

let celularFormatado = ""

if (celularString.length === 10) {
    let celularDDD = celularString.slice(0, 2)
    let celularPrimeiros = celularString.slice(2, 6)
    let celularFinais = celularString.slice(6, 10)
    celularFormatado = `(${celularDDD}) 9 ${celularPrimeiros}-${celularFinais}`
} else if (celularString.length === 8) {
    let celularPrimeiros = celularString.slice(0, 4)
    let celularFinais = celularString.slice(4)
    celularFormatado = `9 ${celularPrimeiros}-${celularFinais}`
} else if (celularString.length === 9) {
    let celularPrimeiro = celularString[0]
    let celularPrimeiros = celularString.slice(1, 5)
    let celularFinais = celularString.slice(5)
    celularFormatado = `${celularPrimeiro} ${celularPrimeiros}-${celularFinais}`
} else {
    let celularDDD = celularString.slice(0, 2)
    let celularPrimeiro = celularString[2]
    let celularPrimeiros = celularString.slice(3, 7)
    let celularFinais = celularString.slice(7)
    celularFormatado = `(${celularDDD}) ${celularPrimeiro} ${celularPrimeiros}-${celularFinais} `
}













console.log(celularFormatado)


























// let celularPalavra = celular.toString()
// let celularDDD = celularPalavra.length > 9 ? celularPalavra.slice(0, 2) : ""
// let celularResto = celularPalavra.length > 9 ? celularPalavra.slice(2) : "9" + celularPalavra

// //Caso exista o DDD = (71) 9 9991-8888
// let celularSemNove = celularPalavra.slice(2, 11)


// //Caso não exista o DDD = 9 9991-8888


// if (celularPalavra.length === 10) {
//     console.log(`(${ celularDDD }) 9 ${ celularResto } `)
// } else if (celularPalavra.length === 11) {
//     console.log(`(${ celularDDD }) 9 ${ celularSemNove } `)
// } else if (celularPalavra.length === 8) {
//     console.log(${celularPalavra})
// }