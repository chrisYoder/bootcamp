// This Keyword
  // 
  
  var comments = {
    
  };
  
  comments.data = ['good job', 'bye', 'lame...' ]
  // console.log(comments.data);
  comments.print = function() {
    this.data.forEach(function(el) {
      console.log(el);
    })
  }
  
  console.log(comments.print());