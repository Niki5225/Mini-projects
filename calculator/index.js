const VALID_OPERATIONS = ['+', '-', '*', '/'];
function calculator() {
    let operation = document.getElementById('operation').value;
    let num1 = Number(document.getElementById('number1').value);
    let num2 = Number(document.getElementById('number2').value);
    let result = document.getElementById('res');
    let error = document.getElementById('error');

    switch (operation) {
        case '/':
            result.value = num1 / num2 ? num2 !== 0 : 0;
            break;
        case '*':
            result.value = num1 * num2;
            break;
        case '+':
            result.value = num1 + num2;
            break;
        case '-':
            result.value = num1 - num2;
            break;
        default:
            raiseError();
    }

    function raiseError() {
        result.value = 'Error!';
        error.style.display = 'block'
    }
}
function reset() {
    document.getElementById('operation').value = '';
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('res').value = '';
    document.getElementById('error').style.display = 'none';
}