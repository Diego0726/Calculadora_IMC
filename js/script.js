//DOM

const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//Evento

btn.addEventListener('click',imc)

//função

function imc(){
    
    let massa = peso.value
    let alt = Number(altura.value)
   
    let imcfinal = massa/(alt*alt)

    resultado.textContent = "Seu imc é : "+imcfinal.toFixed(2)

}
