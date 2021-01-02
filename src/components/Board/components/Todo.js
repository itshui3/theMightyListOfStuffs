import React, { useState } from 'react'

import './Todo.css'

function Todo({ 
    todoID, 
    todo, 
    removeTodo, 
    setTodoDragID,
    todoDragID,
    evaluateDragTodo,
    taskBorderEmphasis }) {

return (
<>

<div 
className='todo_card' 
key={todoID} 

draggable='true'
onDragStart={() => setTodoDragID(todoID)}
onDragOver={(ev) => ev.preventDefault()}
onDrop={() => {
    if (todoDragID>-1) evaluateDragTodo(todoID)
}}

onMouseEnter={taskBorderEmphasis}
onMouseLeave={taskBorderEmphasis}
>
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
