'use strict';

//INTRO TO THE DOM
// var h1 = document.querySelector('h1');
// h1.style.color = 'pink';


// var body = document.querySelector('body');
// var isBlue = false;

// setInterval(function(){
//     if(isBlue){
//         body.style.background = 'white';
//     }else{
//         body.style.background = '#3486db';
//     }
//     isBlue = !isBlue;
// }, 1000);

//IMPORTANT SELECTOR METHODS

// var tag = document.getElementById('highlight');
// tag.style.backgroundColor = 'yellow';

// var tags = document.getElementsByClassName('bolded');
// for(var i = 0; i < tags.length; i++){
//   tags[i].style.fontWeight = '700'
// }

// var tagName = document.getElementsByTagName('li');

// var tag = document.querySelector('#highlight');
// tag.style.backgroundColor = 'red';

// var tags = document.querySelectorAll('.bolded');

// for(var h = 0; h < tags.length; h++){
//   tags[h].style.fontWeight= '900';
// }

// tags.forEach(function(item){
//   item.style.fontWeight = '900';
// })

// tags.forEach( item => item.style.fontWeight = '900');

// MANIPULATING STYLE

// select


// manipulate
// tag.style.color = 'blue';
// tag.style.border = '10px solid red';
// tag.style.fontSize = '70px';
// tag.style.background = 'yellow';
// tag.style.marginTop = '200px';
// tag.innerHTML = "does this work?";
// function btnClick(){
  
var tag = document.getElementById('highlight');

tag.addEventListener('click', () => {tag.classList.toggle('some-class')});

// function classToggle(){
//   tag.classList.toggle('some-class');
// }

// MANIPULATING TEXT AND CONTENT

var pTag = document.querySelector('p');

pTag.textContent = 'blah, blah, blah'
pTag.innerHTML = 'This is an <strong>awesome</strong> paragraph';


// MANIPULATING ATTRIBUTES
var link = document.querySelector('a');
link.setAttribute('href', 'www.dogs.com');
var getImg = document.querySelector('img').getAttribute('src');
console.log(getImg);
var img = document.querySelector('img');
img.setAttribute('src', 'http://images.numismatics.org/collectionimages%2F19001949%2F1944%2F1944.100.49196.obv.noscale.jpg/0,0,1024,1024/256,/0/default.jpg');

