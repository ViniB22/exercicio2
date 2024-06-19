let res = document.getElementById('res')

function somas() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)

    let somaPar = 0
    let somaImpar = 0

    for(let i=0;i<num.length;i++) {
        if(num[i] % 2 == 0){
            somaPar += num[i]
        }else if(num[i] % 2 == 1){
            somaImpar += num[i]
        }
    }

    res.innerHTML = `Soma dos Pares: ${somaPar}<br>
                    Soma dos Impares: ${somaImpar}`
}