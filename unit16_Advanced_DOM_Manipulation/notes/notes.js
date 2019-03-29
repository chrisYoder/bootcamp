var button = document.querySelector('button');
var output = document.querySelector('#output');
button.addEventListener('click', () => output.innerHTML = 'SOMEONE CLICKED THE BUTTON');

const h1 = document.querySelector('h1');
console.log(h1);
h1.addEventListener('mouseenter', () => h1.style.background = 'orange');
h1.addEventListener('mouseout', () => h1.style.background = 'blue');
h1.addEventListener('click', () => h1.style.fontSize = '50px')

const ul = document.querySelector('ul');

ul.addEventListener('click', () => alert('You clicked the UL'));

const lis = document.querySelectorAll('li');

lis.forEach( li => li.addEventListener('click', () => li.style.color = 'purple'));