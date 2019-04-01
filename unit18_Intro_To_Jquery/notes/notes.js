
// $('#adorable');
// $('#adorable').css('background', 'red');
// $('h1').css('color', 'blue');
// var styles = {
//     color: 'red', 
//     background: 'pink', 
//     border: '2px solid purple'
// };
// $('h1').css(styles);

// text
$('h1').text();
// <--"Jquery"
$('ul').text();
// <-- "
//       Newt
//       Howler Monkey
//       Pine Marten
    
//       M&M
//       Kit Kat
//       Snickers
//     "

$('li').text('I am changing everything');
$('ul').html()
// <--"
//       <li>I am changing everything</li>
//       <li>I am changing everything</li>
//       <li id="adorable">I am changing everything</li>
//     "
$('ul').html('I hacked your UL!');

$('ul').html('<li>I hacked your UL!</li><li>My beard is amazing</li>');

$('img').attr({
  src: "https://static.greatbigcanvas.com/images/singlecanvas_thick_none/science-photo-library/volcanic-lightning-iceland-april-2010,1152521.jpg?max=1000",
  alt: "Volcanic Lightening Storm", 
  width: '500px', 
  height: "500px"
});
