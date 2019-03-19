var todos = [];
var input = prompt('What would you like to do');
function display() {
    console.log('**********');
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log('***********');
}
while (input !== 'quit') {
    if (input === 'list') {
        display();
    }
    else if (input === 'new') {
        var newTodo = prompt('Enter new todo');
        todos.push(newTodo);
    }
    else if (input === 'delete') {
        var index = parseInt(prompt('What index would you like to delete?'));
        todos.splice(index, 1);
    }
    input = prompt("What would you like to do");
}
console.log('OK. You quit the app');
