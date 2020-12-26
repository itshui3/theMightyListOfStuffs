import React from 'react'

function Todo({ todoID, todo }) {
return (
<>

<div className='todo_card' key={todoID}>
    <p className='todo_txt'>{ todo }</p>
    <div className='panel_mutateTodo'>
        <div 
        className='remove_todo todoMutator'
        onClick={() => removeTodo(todoID)}
        >x</div>
        <div
        className='edit_todo todoMutator'
        >edit</div>
    </div>
</div>

</>
)
}

export default Todo
