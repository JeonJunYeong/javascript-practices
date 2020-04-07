// 배열 메소드 - concat
var colors = ['black', 'white', 'yellow'];
var fruits = ['mango', 'banana', 'apple'];

var test = fruits.concat(colors);
console.log(test);

// 배열 메소드 - join
var str = fruits.join(',');
console.log(str);


colors.push('red');
console.log(colors);

//배열 메소드 - reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

//배열 메소드 shift
var numbers = [4000, 8000, 3000, 5000, 1000];
console.log(numbers);
numbers.shift();
console.log(numbers);

//배열 메소드 -slice
var numbers2 = numbers.slice(0, 3);
console.log(numbers2);
console.log(numbers);

//배열 메소드 -splice
console.log(fruits);
var fruits2 = fruits.splice(0, 2);
console.log(fruits2);
console.log(fruits);


//배열 메소드 - sort
console.log(numbers);
numbers.sort();
console.log(numbers);

var a1 = [0, 1, 2, 3, 4];
a1.splice(1, 3, 10);
console.log(a1);

var a2 = [0, 1, 2, 3, 4];
var a3 = a2.splice(1, 1, 10);
console.log(a2);
console.log(a3);