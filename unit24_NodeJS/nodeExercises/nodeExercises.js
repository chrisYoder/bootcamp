// Echo Exercise
console.log('***ECHO EXERCISE***');
const echo = (str, num) => {
  for(let i = 1; i <= num; i++){
    console.log(`${i}. ${str}`);
  }
};

echo('Echo!!!!', 10);
echo('Tater Tots', 3);

console.log('***AVERAGE GRADE EXERCISE***');

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const average = (arr) => Math.round(arr.reduce(reducer) / arr.length);


const scores = [90, 98, 89, 100, 100, 86, 94];
const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores));
console.log(average(scores2));