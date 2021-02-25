const sum = function (args) {
    let total = 0;
    for (const a of args) {
        total = total + a;
    }
    return total;
}
const sumofArray = [1, 3, 4];
console.log(sum(sumofArray));