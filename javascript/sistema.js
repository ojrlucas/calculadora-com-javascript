function adicionarValor(valor) {
    document.getElementById('visor').value += valor     
}

function calcular() {
    try {
        document.getElementById('visor').value = eval(document.getElementById('visor').value).toFixed(2)
    } catch (error) {
        document.getElementById('visor').value = 'Erro'
    }
}

function limparVisor() {
    document.getElementById('visor').value = ''
}

function apagarUm() {
    let visor = document.getElementById('visor')
    visor.value = visor.value.slice(0, -1)
}