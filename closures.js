/* sqare is the clouse function of outer function of sumOfsqare 
and accessing the outer function variable 
*/
const sumOfsqare = function (a, b) {
    return sqare(a) + sqare(b);
}
const sqare = function (x) {
    return x * x;
}
// Calling the outer function
console.log(sumOfsqare(2, 3));