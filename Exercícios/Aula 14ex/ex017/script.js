function gerar() {
    var res = document.getElementById("res")
    var tab = document.getElementById("seltab")

    if(txtnum.value.length == 0) {
        alert("Digite um número!")
    } else {
        var num = Number(txtnum.value)
        tab.innerHTML = ""
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement("option")
            item.text = `${num} x ${i} = ${num * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}