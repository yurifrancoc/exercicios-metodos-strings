const cpf = "011.022.033-444";

let CPF = cpf

for (item of CPF) {
    if ([".", "-", "/"].includes(item)) {
        CPF = CPF.replace(item, "")
    }
}
console.log(CPF) 