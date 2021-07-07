function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.all("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute("src", "meninokids.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "mjovem.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "madulto.png")
            } else {
                // Idoso
                img.setAttribute("src", "midoso.png")
            }
        } else if (fsex[1].checked) {
            gênero= "Mulher"
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute("src", "meninakids.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "fjovem.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "fadulta.png")
            } else {
                // Idoso
                img.setAttribute("src", "fidosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}