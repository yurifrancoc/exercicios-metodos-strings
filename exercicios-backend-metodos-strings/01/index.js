const comentario = "Esse pandemia é muito perigoso!";

const maiusculo = comentario.toUpperCase()
const verification = maiusculo.includes("COVID") || maiusculo.includes("PANDEMIA")

if (verification === true) {
    console.log("Comentário bloqueado")
} else {
    console.log("Pode comentar irmão!")
}






















// let achou = false

// for (let palavra of array) {
//     if (palavra === "COVID") {
//         achou = true
//         console.log("Comentário bloqueado por conter palavras proibidas")
//     }
// }

