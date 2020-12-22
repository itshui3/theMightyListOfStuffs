import React from 'react'

function TodoInput({todo, writeTodo, toggleAddingTodo, todoInputRef}) {
return (
<>

    <input 
    ref={todoInputRef}
    value={todo}
    onChange={writeTodo}
    className='todo_card' 
    placeholder='Add Todo'
    onBlur={toggleAddingTodo}
    />
    
</>
)
}

export default TodoInput
