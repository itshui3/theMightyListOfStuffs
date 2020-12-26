import React, { useState, useEffect, useRef } from 'react'

import './TodoInput.css'

function TodoInput({
    taskID,

    todo,
    writeTodo,
    toggleAddingTodo,
    todoInputRef,
    addTodo,
}) {

    const handleBlurSet = (ev) => {
// if focus is targetting an irrelevant node
        if (ev.relatedTarget === null) { return toggleAddingTodo() }
        const matcher = ev.relatedTarget.id

        if (
// or if focus leaves these three dom nodes that make up my comp
            matcher !== `${taskID} t_cont` &&
            matcher !== `${taskID} t_input` &&
            matcher !== `${taskID} t_btn`
        ) {
// unmount
            toggleAddingTodo()
        }

    }

    const handleAddTodo = (ev) => {
        preventBlur()
        ev.preventDefault()

        if (todo.length) {
            toggleAddingTodo()
            addTodo()
        } else {
            todoInputRef.current.focus()
        }
    }

// the focusable nature of tabIndex='0' elements adds some default border styling on focus
return (
<>

<div 
className='input_cont' 

tabIndex='0'
onBlur={handleBlurSet}
id={`${taskID} t_cont`}
>

    <input
    className='todo_card'
    value={todo}
    onChange={writeTodo}
    ref={todoInputRef}

    tabIndex='0'
    onBlur={handleBlurSet}
    id={`${taskID} t_input`}
    />

    <button 
    className='addTodo_btn'

    tabIndex='0'
    onBlur={handleBlurSet}
    id={`${taskID} t_btn`}

    onClick={handleAddTodo}
    >Add Todo</button>

</div>
    
</>
)
}

export default TodoInput
