const restFunction = function (a, b, ...rest) {
    console.log(a, b, rest);
}
const args = ['a', 'b', 'c', 'd'];
console.log(restFunction(args));


