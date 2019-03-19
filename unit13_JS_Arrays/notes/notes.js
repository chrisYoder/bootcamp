/*OBJECTIVES
1. DEFINE AND ADD DATA TO ARRAYS
2. UTILIZE BUILT-IN ARRAY METHODS
3. EXERCISE: CONSOLE TO-DO LIST.
*/

var friends = ['Emily', 'Cassie', 'T', 'Rich', 'Rob'];



/*ARRAY METHODS

1. PUSH/POP-->ADD/REMOVE ITEMS TO THE END OF AN ARRAY. 

*/
friends.push('Steven');
console.log(friends);

friends.pop();
console.log(friends);

/*

2. SHIFT/UNSHIFT-->ADDS/REMOVES ELEMENTS FROM THE BEGGINING OF AN ARRAY. !!!SLOW!!!

*/

friends.shift();
console.log(friends);
friends.unshift('Emily');
console.log(friends);

/*

3. INDEXOF-->RETURNS THE INDEX OF THE FIRST OCCURENCE OF THE GIVEN PARAMETER

*/

console.log(friends.indexOf('Emily')); //0

/*

4. SLICE--> USE SLICE TO COPY DIFFERENT PORTIONS OF AN ARRAY

*/

let closeFriends = friends.slice(0, 2);
console.log(closeFriends);

/*
EXERCISES: 

E1. RETURNS undefined because the length is always one more than the last index of the array. The second console.log below will return 88.

*/

var numbers = [ 22, 67, 33, 96, 88];
console.log(numbers[numbers.length]);
console.log(numbers[numbers.length - 1]);

/*
E2. 'Mooney'
*/

var friendGroups = [
  ['harry', 'ron', 'hermione'], 
  ['malfoy', 'crabbe', 'goyle'],
  ['mooney', 'wormtail', 'prongs']
];

console.log(friendGroups[2][0]);


/*
ARRAY ITERATION OBJECTIVES
1. USE A FOR LOOP TO ITERATE OVER AN ARRAY
2. USE FOREACH TO ITERATE OVER AN ARRAY
3. COMPARE AND CONTRAST FOR LOOPS AND FOR EACH
*/

// Exercise: it will just print out the number that satisfies the conditional
for(let i = 0; i < friends.length; i++){
  console.log(friends[i]);
}

friends.forEach(i => console.log(i));

 numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ['red', 'orange', 'yellow', 'green'];

numbers.forEach(function(color){
  if(color % 3 === 0){
    console.log(color);
  }
});

// Build my own .forEach

var nums = [45, 65, 77, 24];

function myForEach( arr, func){
  for(var i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}

colors = ['red', 'orange', 'yellow'];

myForEach(colors, function(color){
  console.log(color);
});

myForEach(nums, function(num){
  console.log(num);
});

Array.prototype.myForEach = function(func) {
  for(var i = 0; i< this.length; i++){
    func(this[i]);
  }
};

console.log(colors.myForEach(function(color){
  console.log(color);
})
);



