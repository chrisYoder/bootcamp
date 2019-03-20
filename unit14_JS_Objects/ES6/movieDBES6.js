// CREATE AN ARRAY OF MOVIE OBJECTS. EACH MOVIE SHOULD HAVE A TITLE, RATING, AND HASWATCHED. 
// ITERATE THROUGH THE ARRAY AND PRINT OUT SOMETHING LIKE:
  // YOU HAVE SEEN/NOT SEEN "MOVIE.TITLE" - RATING
  
const movies = [
  {
    title: 'Green Book', 
    rating: '5', 
    hasWatched: false
  }, 
  
  {
    title: 'BlacKKKlansman', 
    rating: '4.5', 
    hasWatched: false
  }, 
  
  {
    title: 'Bohemian Rhapsody', 
    rating: '5', 
    hasWatched: true
  }, 
  
  {
    title: 'The Favourite', 
    rating: '4', 
    hasWatched: false
  }, 
  
  {
    title: 'Roma', 
    rating: '3.5', 
    hasWatched: false
  }, 
  
  {
    title: 'A Star is Born', 
    rating: '4.5', 
    hasWatched: false
  },
  
  {
    title: 'Vice', 
    rating: '3.5', 
    hasWatched: false
  }
]



movies.forEach(function(movie){
  var status = (movie.hasWatched === true) ? 'have seen' : 'have not seen';
  console.log(`You ${status} "${movie.title}" - ${movie.rating} stars`);
});
