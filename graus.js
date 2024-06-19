let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let para_cels = 0;
let para_fare = 0;

function transCels(){
    let fare = Number(document.getElementById('fare').value)

    para_cels = fare * 1.8 + 32

    imprimi1()
}
function imprimi1(){
    res1.innerHTML = `O valor em graus Celsius é ${para_cels.toFixed(2)}`
}
function transFare(){
    let cels = Number(document.getElementById('cels').value) 

    para_fare = (cels - 32) * (5/9) 

    imprimi2()
}
function imprimi2(){
    res2.innerHTML = `O valor em graus Farenheit é ${para_fare.toFixed(2)}`
}