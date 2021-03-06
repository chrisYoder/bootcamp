// 1. PRINT REVERSE FUNCTION: WRITE A FUNCTION THAT TAKES AN ARRAY AND PRINTS OUT THE ELEMENTS IN REVERSE ORDER
function printReverse(arr){
  for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}

// printReverse([1, 2, 3, 4]);
// printReverse(['a', 'b', 'c']);

// 2. isUniform() takes an array and returns true if all elements in the array are identical

function isUniform(arr) {
  for (var i = 1; i < arr.length; i++){
    if(arr[i] !== arr[0]) {
      return false;
    }
  }
  
  return true;
}

// console.log(isUniform([1, 1, 1, 1])); //true
// console.log(isUniform([1, 2, 1, 1])); //false
// console.log(isUniform(['a', 'b', 'p'])); //false
// console.log(isUniform(['b','b','b'])); //true


// 3. sumArray() takes an array of numbers and retursn the sum of all the numbers in the array

function sumArray(arr){
  var sum = 0;
  arr.forEach(function(elem) {
    sum += elem;
  });
  return sum;
  
}

// console.log(sumArray([1, 2, 3])); //6
// console.log(sumArray([10, 3, 10, 4])); //27
// console.log(sumArray([-5, 100])); //95

// 4 max(): write a function that accepts an array of numbers and returns the maximum number in the array

function max(arr) {
  var maxNum = arr[0]; 
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > arr[i-1]){
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));