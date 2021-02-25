const alphabetArray = ['a', 'e', 'c', 'b'];
const descArray = alphabetArray.sort((a, b) => a > b ? -1 : 1);
// For ASC we have to change b > a
console.log(descArray);