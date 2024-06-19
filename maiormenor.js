let res = document.getElementById('res')

function maiorEMenor() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)
    
    let maior = 0
    let menor = 0
    let contar = 0

    for(let j=0;j<num.length;j++){
        contar = 0
        for(let i=0;i<num.length;i++) {
            if(num[j] >= num[i]){
                contar += 1
            }
        }
        if(contar > 4) {
            maior = num[j]
        }else if(contar <= 1) {
            menor = num[j]
        }
    }

    console.log("| Maior número: ",maior)
    console.log("| Menor Número: ",menor)

    res.innerHTML = `Maior Número: ${maior} <br>
                    Menor Número: ${menor}`
}