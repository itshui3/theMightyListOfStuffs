const addTodo = (task) => (todo) => {
    console.log('task', task)
    console.log('todo', todo)
}

console.log( () => addTodo('task')('todo') )

