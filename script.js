// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = '';
    let firstNumber = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstNumber = '';
                display.value = '';
            } else if (value === 'DEL') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
                firstNumber = currentInput;
                currentInput = '';
            } else if (value === '=') {
                if (operator && firstNumber !== '') {
                    const result = eval(`${firstNumber} ${operator} ${currentInput}`);
                    display.value = result;
                    currentInput = result;
                    operator = '';
                    firstNumber = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});