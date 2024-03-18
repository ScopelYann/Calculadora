let clean = document.querySelector(".clear")

function display(number){//Mostra os numeros digitados na <div> result
    let resultado = document.getElementById("resultado").innerHTML 
    let result = document.getElementById("resultado")

    document.getElementById("resultado").innerHTML = resultado + number//Adiciona o numero do botao a tela

    if (result.innerHTML.length == 8){//Caso o total de caractere chegue a 8 ele diminui a font para o valor nao sair da box
        result.style.fontSize = '23px'
        result.style.transition = '100ms'
        result.style.paddingTop = '15px'
    }
    if (result.innerHTML.length == 12){//Caso o total de caractere chegue a 12 ele redefine a calculadora/ no caso o valor dela
        result.innerHTML = ''
    }
}

function clear(){//Quando o usuario clica no botao AC ele redefine o valor para o valor inicial
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    resultado.style.fontSize = '30px'
}

function apagar(){
    let result = document.querySelector("#resultado").innerHTML
    document.getElementById("resultado").innerHTML = result.substring(0, result.length - 1)
}
function realizar(){
    let resultado = document.getElementById('resultado').innerHTML
    if (resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}
clean.addEventListener('click', clear)