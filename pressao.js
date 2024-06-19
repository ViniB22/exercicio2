let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let para_psi = 0;
let para_mmhg = 0;

function transMmHg(){
    let mmhg = Number(document.getElementById('mmhg').value)

    para_psi = mmhg * 0.0193367801

    imprimi1()
}
function imprimi1(){
    res1.innerHTML = `O valor em PSI é ${para_psi.toFixed(3)}`
}
function transPSI(){
    let psi = Number(document.getElementById('psi').value)

    para_mmhg = psi / 0.0193367801

    imprimi2()
}
function imprimi2(){
    res2.innerHTML = `O valor em mmHg é ${para_mmhg.toFixed(3)}`
}
