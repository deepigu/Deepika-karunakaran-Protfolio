let display = document.getElementById('display');
let currentInput = '';

function handleButtonClick(event) {
    if (event.target.tagName === 'BUTTON') {
        currentInput += event.target.textContent;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}