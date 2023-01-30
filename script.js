let numberRandom = Math.floor(Math.random() * 100) + 1
let sugestao = document.getElementById('sugestao')
let tentativas = 0
let palpites = []
console.log(numberRandom)

function checarTentativas(){
    document.write(sugestao.value)
}

function perdeu(){
    window.location.reload()
}