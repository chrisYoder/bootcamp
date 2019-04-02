let mainHeader = {
  color: 'white', 
  background: 'black'
};

let subHeader = {
  textDecoration: "underline", 
};

$('h1').css(mainHeader);
$('h2').css(subHeader);

$('h1').click(function() {
  alert('h1 click');
});

// $('button').click(function(){
//   alert('button clicked');
// });

// document.querySelectorAll('button').addEventListener( () => alert('button clicked'));


// $('div').click( () => console.log('test')); //winner, winner, chicken dinner BUT

// $('div').click(function(){
//   // to use $(this) I cannot use arrow function
//   $(this).css('background', 'red');
// })

$('div').click(function() {
  // can i use string literals--YES I CAN
  let text = $(this).text();
  console.log(`You clicked: ${text}`);
});

// KEYPRESS

// $('input[type=text]').keypress( () => console.log('You pressed a key'));
// $('input[type=text]').keypress(event => {
//   if(event.which === 13){
//     console.log('You hit enter');
//   }
// });

// .on

// $('#dragMe').on('dragstart', () => console.log('drag started'));
// $('h1').on('click', function(){
//   $(this).css({
//       background: 'blue', 
//       color: 'yellow',
//     });
// });



$('input[type=text]').on('keypress', e => (e.which === 13) ? console.log('you hit enter') : console.log(e.keyCode));


$('div').on('mouseenter', function(){
  $(this).css('font-weight', 'bold');
});

// Effects
// $('#fadeOutBTN').on('click', function(){
//   $('#fade').fadeOut(500, 'swing', () => console.log('Fade out complete') );
// });

// $('#fadeInBTN').on('click', function(){
//   $('#fade').fadeIn(500, 'swing', () => console.log('Fade in complete'));
// });

$('#fadeIn').on('click', function(){
  $('#fadeInE').fadeIn(500, 'swing', () => console.log('Fade In Complete') );
})


$('#toggleClick').on('click', function(){
  $('#toggle').fadeToggle(500);
  $('.slideExample').slideToggle(500);
});


