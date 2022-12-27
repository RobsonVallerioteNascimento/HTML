
let data = new Date()
let meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Stembro","Outubro","Novembro","Dezembro")
let desem = new Array("Domingo","Segund-Feira","Terça-Feira","Quarta-Feira","Qinta-Feira","Sexta-Feira","Sábado")

document.fRelogio.data.value = desem[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear()

//document.write(meses[6])

data.getDay() //dia da semana
data.getDate() // dia do mês
data.getMonth() // o mês
data.getFullYear()// ano

function movRel() {
    let tempo = new Date()
    let hora = tempo.getHours() 
    let minuto = tempo.getMinutes()
    let segundos = tempo.getSeconds()

    //document.fRelogio.relogio.value = impressaoHoras

    if (hora < 10) {
        hora = "0" + tempo.getHours()
    }
    if (minuto < 10) {
        minuto = "0" + tempo.getMinutes()
    }
    if (segundos < 10) {
        segundos = "0" + tempo.getSeconds()
    }

    let impressaoHoras = hora + ":" + minuto + ":" + segundos
    document.fRelogio.relogio.value = impressaoHoras

    setTimeout("movRel()", 1000)
}