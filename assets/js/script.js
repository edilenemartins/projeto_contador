var currentNumberWrapper = document.getElementById('currentNumber');
var buttonIncrement = document.getElementById('adicionar');
var currentNumber = 0;

// implementar o decrement usando o método addEventListener.
document.getElementById("subtrair").addEventListener('click', decrement);

// função para diminuir 1 quando o botão - for clicado.
function decrement() {    
    currentNumber = currentNumber - 1;    
    currentNumberWrapper.innerHTML = currentNumber;

    // mude a cor do texto em currentNumber para vermelho quando o número for negativo.    
    if (currentNumber < 0) {        
        currentNumberWrapper.style.color = "red";
    } 
}

// função para somar 1 quando o botão + for clicado.
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = "black";
    }     
    
    // desabilita o botão quando o contador chegar no dez
    if (currentNumber == 10) {
        buttonIncrement.disabled = true;
    } else {
        buttonIncrement.disabled = false;
    }
}