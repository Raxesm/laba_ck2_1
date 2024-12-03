const concatNumbers = (num1, num2) => `${num1}${num2}`;
     console.log(concatNumbers(5, 10));
const concatStrings = (str1, str2, str3) => `${str1}${str2}${str3}`;
     console.log(concatStrings("Hello, ", "world", "!"));
const sumThreeNumbers = (a, b, c) => a + b + c;
     console.log(sumThreeNumbers(1, 2, 3));
const multiplyNumbers = (x, y) => x * y;
     console.log(multiplyNumbers(4, 5));
const subtractNumbers = (a, b) => a - b;
     console.log(subtractNumbers(10, 4));
const remainder = (dividend, divisor) => dividend % divisor;
     console.log(remainder(10, 3));
const numConst = 42;
let strVar = "Пример";
const boolConst = true;
let arrVar = [1, 2, 3];
const objConst = { key: "value" };
let funcVar = function() { return "Функция"; };
const nullConst = null; 
let undefVar;
const data = {
     name: "John",
     age: 30,
     city: "New York"
 };
 const jsonData = JSON.stringify(data);
 console.log(jsonData);