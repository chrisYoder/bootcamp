const todos: any = [];
let input: string = prompt('What would you like to do');

while(input !== 'quit'){
  if(input === 'list'){
    console.log(todos);
  }
  else if(input === 'new'){
    let newTodo: string = prompt('Enter new todo');
    todos.push(newTodo);
  }
  input = prompt("What would you like to do");
}
console.log('OK. You quit the app');