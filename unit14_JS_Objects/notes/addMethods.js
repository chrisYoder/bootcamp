// ADDING METHODS TO OBJECTS
  // KEEPS CODE LOGICALLY ORGANIZED

var obj = {
  name: 'Chuck', 
  age: 45, 
  isCool: false, 
  friends: ['bob', 'tina'],
  add: function(x, y){
    return x + y;
  }
}

console.log(obj);
console.log(obj.add(1, 2));

var dog = {
  name: 'Rex', 
  speak: function(){
    return "WOOF"
  }
}

var cat = {
  name: 'JD', 
  speak: function(){
    return "MEOW"
  }
}

console.log(dog.speak());
console.log(cat.speak());