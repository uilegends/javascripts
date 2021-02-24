const numberArray = [3, 5, 8];
// Last value of array
const arrayLength = numberArray[numberArray.length - 1];
// Missing array
let missingArray = [];
for (let i = 1; i <= arrayLength; i++) {
    if (!numberArray.includes(i)) {
        missingArray.push(i);
    }
}
console.log(missingArray);
// O/P: [1,2,4,6,7]