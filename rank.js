let hero = "Edson"

partidas(35, 15)

function partidas(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas
    total = vitorias + derrotas
}

if (saldoVitorias <= 10){
    level = "Ferro"   
}
else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    level = "Bronze"
}
else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    level = "Prata"
}
else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    level = "Ouro"
}
else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    level = "Diamante"
}
else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    level = "Lendário"
}
else {
    level = "Imortal"
}

console.log("O Herói " + hero + " venceu " + saldoVitorias + " de " + total +
    " partidas e está no nível de " + level)