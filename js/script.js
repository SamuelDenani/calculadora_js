/* When "equal" button is pressed, it should
 * display the operation result. It only displays
 * the result if the inputs are real numbers.
 */
document.getElementById('calculate-button').onclick = function doMath() {
    let val1 = parseInt(document.getElementById('elem-1').value);
    let val2 = parseInt(document.getElementById('elem-2').value);

    giveResult(val1, val2);
}

/* When user hits Enter key in keyboard, it should 
 * display the operation result. It only displays
 * the result if the inputs are real numbers.
 */
document.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        let val1 = parseInt(document.getElementById('elem-1').value);
        let val2 = parseInt(document.getElementById('elem-2').value);

        giveResult(val1, val2);
    }
})

/* Check if the inputs are real numbers.
 * If the inputs are not true, the user is alerted.
 * If the inputs are true, display the operation result.
 * The variables "val1" and "val2" are the values of the inputs.
 */
function giveResult(val1, val2) {
    if (isNaN(val1)) {
        alert("Os números são a parte mais importante de uma conta!");
        document.getElementById('elem-1').focus();
    }
    else if (isNaN(val2)) {
        alert("Os números são a parte mais importante de uma conta!");
        document.getElementById('elem-2').focus();
    }
    else {
        // If the numbers are real set variables to get operation symbol and number input.
        let choice = document.querySelector('input[name="operation"]:checked');
        let operation = choice.value;
        let operationResult = getResult(val1, val2, operation);
        // Display result in HTML h2 Element.
        document.getElementById('result').innerText = operationResult;
    }
}

/* Returns the result of an operation over two numbers.
 * Arguments: two valid numbers and one operation symbol.
 * Supports sum, subtraction, multiplication, division, percent and exponent.
 */
function getResult(num1, num2, symbol) {
    if (symbol === '+') {
        return num1 + num2;
    }
    else if (symbol === '-') {
        return num1 - num2;
    }
    else if (symbol === '*') {
        return num1 * num2;
    }
    else if (symbol === '/') {
        return num1 / num2;
    }
    else if (symbol === '%') {
        return num1 / '100' * num2;
    }
    else if (symbol === '^'); {
        return Math.pow(num1, num2);
    }
}