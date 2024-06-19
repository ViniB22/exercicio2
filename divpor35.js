function div35() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)

    let div3 = 0
    let div5 = 0
    let div35 = 0

    for(let i=0;i<num.length;i++) {
        if((num[i] % 3 == 0)&&(num[i] % 5 == 0)){
            div35 += 1
        }
        if(num[i] % 3 == 0){
            div3 += 1
        }
        if(num[i] % 5 == 0){
            div5 += 1
        }
    }
    res.innerHTML = `Divisiveis por 3: ${div3}<br>`
    res.innerHTML += `Divisiveis por 5: ${div5}<br>`
    res.innerHTML += `Divisiveis por 3 e 5: ${div35}`
} 