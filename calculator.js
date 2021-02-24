// accepting first, second and type of calculator with default values
const sumOfnumbers = function (firstNumber = 0, secondNumber = 0, calculate = '') {
    return calculatorNumbers(firstNumber, secondNumber, calculate);
}
const calculatorNumbers = function (first, second, type) {
    switch (type) {
        case 'plus':
            return first + second; break;
        case 'minuus':
            return first - second; break;
        case 'multiply':
            return first * second; break;
        case 'divide':
            return first / second; break;
        default:
            return 0;
    }
}
console.log(sumOfnumbers(23, 43, 'plus'));

