const dublicateArray = [2, 4, 5, 6, 2, 5, 6, 8, 9, 3];
// Similarly it will work for alphabets ['a','b', 'c', 'a', 'd', 'a']
const removedDublicate = [...new Set(dublicateArray)];
console.log(removedDublicate);