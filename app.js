// write code here
const array = [9, 17, 23, 5];
const result = array.filter(item => item > 10);
console.log(result); // [17, 23]

const array = [1, 2, 3, 4];
const result = array.filter(item => item % 2 !== 0);
console.log(result); // [1, 3]

const array = [1, '1', 2, {}];
const result = array.filter(item => typeof item === 'number');
console.log(result); // [1, 2]
