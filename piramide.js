let res = document.getElementById('res')
let calculo = 0;

function calcular(){
    let altura = Number(document.getElementById('altura').value)
    let areabase = Number(document.getElementById('areabase').value)

    calculo = (areabase * altura) / 3

    imprimi()
}
function imprimi(){
    res.innerHTML = `O volume da pirâmide é = ${calculo}`
}