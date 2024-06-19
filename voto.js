let res = document.getElementById("res")

function calc_pre(){
    let nome = (document.getElementById('nome').value)
    console.log(nome)
    let idade = Number(document.getElementById('idade').value)
    console.log(idade)

    if ((idade <=15)){
        res.innerHTML = `A(o) ${nome} não pode votar`
    } else if ((idade >=16)){
        res.innerHTML = `A(o) ${nome} pode votar`
    }
}