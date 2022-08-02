function start(){
    const botaoCalcula = document.querySelector('#button-calculate-imc')
    botaoCalcula.addEventListener('click', handleButtonClick)
    const peso = document.querySelector('#input-weight');
    const altura = document.querySelector('#input-height')
    peso.addEventListener('input',handleButtonClick) 
    altura.addEventListener('input',handleButtonClick)
    handleButtonClick();
    
}

function calculateImc(weight, height){
    return weight / (height*height)
    
}

function handleButtonClick(){
    const peso = document.querySelector('#input-weight');
    const altura = document.querySelector('#input-height')
    resultimc = calculateImc(peso.value,altura.value)
    var valorImc = document.querySelector('#result')
    var imcDecimal = resultimc.toFixed(2).replace('.',',');
    valorImc.textContent = imcDecimal
}

start()