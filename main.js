const form = document.getElementById("form-atividade")
const imgAprovado = '<img src="./images/images/aprovado.png" alt="Emoji festejando" />'
const imgReprovado = '<img src="./images/images/reprovado.png" alt="Emoji triste" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()
    adicionarLinha()
    atualizarTabela()
    atualizarMediaFinal()
    calcularMediaFinal()
})

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'
    linhas += linha

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
    
}

function atualizarMediaFinal() {
    const mediaFinal = calcularMediaFinal()
    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado
}

function calcularMediaFinal() {
    somaNotas = 0

    for(let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    return somaNotas / notas.length
}