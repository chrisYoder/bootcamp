// // Boolean Logic

// let x = 3;
// let y = 8;
// let exp = !(x == '3' || x === y) && !(y != 8 && x < y)
// console.log("Example 1 is " + exp);

// let str = '';
// let msg = 'haha!';
// let isFunny = 'false';
// let exp2 = !((str || msg) && isFunny);
// console.log('Example 2 is ' + exp2);

// // Conditionals 

// let age = 21;

// if(age < 18){
//     console.log("You cannot enter the venue");
// }
// else if (age >= 18 && age < 21) {
//     console.log("You can enter but not drink");
// }
// else {
//     console.log("You can enter and you can drink");
// }

// function ageExercise(age2) {
//     if (age2 < 0) {
//         console.log('Error: Age cannot be negative');
//     }
//     else if (age2 === 21) {
//         console.log('Happy 21st Birthday!!');
//     }
//     else if (age2 % 2 === 1) {
//         console.log("Your age is odd");
//     }
//     else if (Math.sqrt(age2) % 1 === 0){
//         console.log('Perfect sqaure');
//     }
// }

// ageExercise(-2);
// ageExercise(21);
// ageExercise(13);
// ageExercise(16);


// // Loops

// // While loops => while (somecondition){run code}

// let count = 10;
// while (count> 0) {
//     console.log(count);
//     count--;
// }
// console.log("Blast Off");

// let count2 = 0;
// while (count2 <= 20) {
//     console.log(`The count is: ${count2}`);
//     count2+=2;
// }

// str = 'hello, The Orville is awesome';
// let cnt = 0;

// while (cnt < str.length){
//     console.log(`${str[cnt]} at index ${cnt}`);
//     cnt++;
// }

// WHILE LOOPS PROBLEM SET

// 1. 
// let num = -10;
// console.log('---PROBLEM ONE: PRINT ALL NUMBERS BETWEEN -10 AND 19---')
// while (num < 20) {
//     console.log(num);
//     num++
// }

// // 2. 
// console.log('---PROBLEM TWO: PRINT ALL EVEN NUMBERS BETWEEN 10 AND 20---')
// let num2 = 10;
// while (num2 <= 40) {
//     if (num2 % 2 === 0){
//         console.log(num2);
//     }
//     num2++;
// }

// // 3.
// console.log('---PROBLEM THREE: PRINT ALL ODD NUMBERS BETWEEN 300 AND 333---')
// let num3 = 300;
// while (num3 <= 333) {
//     if (num3 % 2 === 1) {
//         console.log(num3);
//     }
//     num3++;
// }

// // 4. PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50
// console.log('---PROBLEM FOUR: PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50---')
// let num4 = 5;
// while (num4 <= 50) {
//     if (num4 % 5 === 0 && num4 % 3 === 0) {
//         console.log(num4);
//     }
//     num4++;
// }

// FOR LOOPS

// for(let i = 1; i < 6; i++){
//     console.log(i);
// }


// for(let count = 10; count > 0; count--){
//     console.log(count);
// }

// console.log('Blast off');

// let str = 'hello';

// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// 1. 
console.log('PRINT ALL NUMBERS BETWEEN -10 AND 19');
for(let i = -10; i < 20; i++){
    console.log(i);
}

// 2. 
console.log('PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40');
for(let i = 10; i <= 40; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 3. 
console.log('PRINT ALL ODD NUMBERS BETWEEN 300 AND 333');
for(let i = 300; i <= 333; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

// 4.
console.log('PRINT ALL NUMBERS BETWEEN 5 AND 50 THAT IS DIVISIBLE BY 5 AND 3');
for(let i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}