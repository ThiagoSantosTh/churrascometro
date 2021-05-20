//Carne - 400 gramas por pessoa + 6 horas -> 650kg
// Bebida - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml


let inputadultos = document.getElementById("adultos")
let inputcriancas = document.getElementById("criancas")
let inputduracao = document.getElementById("duracao")

let resultado = document.getElementById('resultado')

function calcular(){
    let adultos = inputadultos.value
    let criancas = inputcriancas.value
    let duracao = inputduracao.value

    let qtTotalCarne = carnePessoa(duracao) * adultos + (carnePessoa(duracao) / 2 * criancas)
    let qtTotalCerveja = cervejaPessoa(duracao) * adultos 
    let qtTotalBebidas = bebidasPessoa(duracao) * adultos + (bebidasPessoa(duracao) / 2 * criancas)
    
    resultado.innerHTML = `<p>${qtTotalCarne / 1000}Kg de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtTotalCerveja / 350)} Latas de cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtTotalBebidas / 200)} Garrafas de bebidas </p>`
}

function carnePessoa(duracao){
    //let carne = 400
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPessoa(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function bebidasPessoa(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}

