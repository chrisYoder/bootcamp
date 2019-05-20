function outer() {
  let data = 'closures are ';
  return function inner() {
    let innerData = 'awesome';
    return data + innerData;
  };
}

// console.log(outer());
// console.log(outer()());

function sum(a) {
  return function inner (b) {
    return a + b;
  };
}

// console.log(sum(5)(5));

// const sumVar = sum(10);
// console.log(sumVar(10));

// Private variables or variables that cannot be modified externally

function counter() {
  let count = 0;
  return function(){
    return ++count;
  };
}

let counter1 = counter();
// console.log(counter1()); //1
// console.log(counter1()); //2

// while(counter1 < 10) {
//   console.log(counter1());
// }


const myCounter = (function() {
  let privateCounter = 0;
  function changeBy(val) { 
    privateCounter += val;
  }
  
  return {
    increment: function(){
      changeBy(1);
    }, 
    decrement: function(){
      changeBy(-1);
    }, 
    value: function(){
      return privateCounter;
    }
  };
})();

// console.log(myCounter.value());
// myCounter.increment();
// myCounter.increment();
// console.log(myCounter.value());
// myCounter.decrement();
// console.log(myCounter.value());

function classRoom(){
  let instructors = ['Colt', 'Elie'];
  return {
    getInstructors: function() {
      return instructors;
    }, 
    addInstructor: function(instructor){
      instructors.push(instructor);
      return instructors;
    }
  };
}

course1 = classRoom();
console.log(course1.getInstructors());
course1.addInstructor('Ian');
console.log(course1.getInstructors());

course2 = classRoom();
console.log(course2.getInstructors());