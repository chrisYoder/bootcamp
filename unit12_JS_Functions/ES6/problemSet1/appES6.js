const isEven = (num) => num % 2 === 0 ? true : false;


// console.log(isEven(4));
// console.log(isEven(21));
// console.log(isEven(68));
// console.log(isEven(333));

const factorial = num => {
  var result = num;
  
  if(num === 0 || num === 1) {
    return 1;
  }
  
  while (num > 1) {
    num--; 
    result = result * num;
  }
  
  return result;
}

// console.log(factorial(5)); //120
// console.log(factorial(2)); // 2
// console.log(factorial(10)); //3628800
// console.log(factorial(0)); // 1

const kebabToSnake = str => str.replace(/-/g, '_');

console.log(kebabToSnake('hello-world'));
console.log(kebabToSnake('dogs-are-awesome'));
console.log(kebabToSnake('blah'));