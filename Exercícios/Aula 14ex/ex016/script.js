function Contar() {
var ini = document.getElementById("txti")
var fim = document.getElementById("txtf")
var passo = document.getElementById("txtp")
var res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Faltam dados!")
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)
        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
        }
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -=p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}