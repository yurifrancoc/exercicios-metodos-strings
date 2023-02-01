const email = "aluno@cubos.academy";

function emailVerificado(email) {
    if (!email.includes("@") || email[0] === "." || email[email.length - 1] === ".") {
        console.log("E-mail inválido")
    } else { console.log("E-mail válido") }
}
emailVerificado(email)