// Check the number is prime or not and showing message using template literals
const isPrimenumber = function (number) {
    const message = 'Yes this is Prime number!';
    return number % 2 === 0 ? false : `${message}`;
}
console.log(isPrimenumber(17));