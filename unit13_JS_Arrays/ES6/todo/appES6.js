const todos = [];
let input = prompt("What would you like to do");

function display(){
  console.log('**********');
  todos.forEach(function(todo, i){
    console.log(`${i}: ${todo}`);
  });
  console.log('***********');
}

while(input !== 'quit'){
  if(input === 'new'){
    let newTodo = prompt('Enter new todo');
    todos.push(newTodo);
    
  }
  else if(input === 'list'){
    display();
  }
  else if(input === 'delete'){
    let index = prompt('What is the index of the todo that you want to delete');
    todos.splice(index, 1);
    
  }
  
  input = prompt("What would you like to do");
}

console.log("OK. You have quit the app");