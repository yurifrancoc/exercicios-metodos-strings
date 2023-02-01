const nome = 'Yuri Franco';

function nickName(nome) {
    let nickName = "@" + nome;
    nickName = nickName.toLowerCase()
    nickName = nickName.replaceAll(" ", "")
    if (nickName.length > 13) {
        nickName = nickName.slice(0, 13)
    }
    return nickName
}

console.log(nickName(nome))