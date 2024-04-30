const button = document.querySelector(".btn-calcular")




function calcularImc() {

    const altura = (document.querySelector(".input-altura").value) / 100
    const peso = document.querySelector(".input-peso").value
    const result = document.querySelector(".result")
    const imc = peso / altura ** 2;
    

    if (imc < 16.5) {
        result.innerHTML = "Você está MUITO abaixo do peso!"

    }
    else if (imc < 18.5) {
        result.innerHTML = "Você está abaixo do peso!"

    }
    else if (imc < 24.9) {
        result.innerHTML = "Você está com o peso normal!"
    }
    else if (imc < 29.9) {
        result.innerHTML = "Você está com sobrepeso!"
    }
    else if (imc < 34.9) {
        result.innerHTML = "Você está com obesidade!"
    }
    else if (imc < 39.9) {
        result.innerHTML = "Você está com obesidade mórbida!"
    }
}

