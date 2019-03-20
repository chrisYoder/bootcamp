// NESTED OBJECTS AND ARRAYS

var posts = [
    {
      title: 'Cats are mediocre',
      author: 'Colt', 
      date: '3/20/2019', 
      comments: [
          {
            author: 'Cat Luvr', 
            comment: 'Terrible post'
          }, 
          
          {
            author: 'Dog boy', 
            comment: 'Awesome post'
          },
        ],
    }, 
    
    {
      title: "cats are actually awesome", 
      author: 'cat luvr',
      date: '3/21/2019', 
      comments: [
          {
            author: 'Cat Luvr\' friend', 
            comment: 'Great post'
          }, 
          
          {
            author: 'Dog boy', 
            comment: 'Terrible post'
          },
        ],
    }, 
  ]
  
  console.log(posts.length);
  console.log('first entry');
  console.log(posts[0]);
  console.log('comments on first entry');
  console.log(posts[0]['comments'])
  console.log('grabbing a particular comment');
  console.log(posts[0].comments[1].comment);
  