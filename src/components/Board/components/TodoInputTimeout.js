import React, { useState, useEffect, useRef } from 'react'

import './TodoInput.css'

function TodoInput({
    todo,
    writeTodo,
    toggleAddingTodo,
    todoInputRef,
    addTodo,
}) {

    const [lock, setLock] = useState(false)

    const handleBlurSet = (ev) => {

        if (ev.relatedTarget === null) { return toggleAddingTodo() }
        const matcher = ev.relatedTarget.className

        if (
            matcher !== 'input_cont' &&
            matcher !== 'todo_card' &&
            matcher !== 'addTodo_btn'
        ) {
            toggleAddingTodo()
        }

    }

    const handleAddTodo = (ev) => {
        setLock(true)

        if (todo.length) {
            toggleAddingTodo()
            addTodo()
        } else {
            todoInputRef.current.focus()
        }
    }

return (
<>

<div 
className='input_cont' 

tabIndex='0'
onBlur={handleBlurSet}
onMouseDown={(ev) => ev.preventDefault()}
onClick={() => {
    setLock(true)
    setTimeout(() => {
        setLock(false)
    }, .0001)
}}
>

    <input
    className='todo_card'
    value={todo}
    onChange={writeTodo}
    ref={todoInputRef}

    tabIndex='0'
    onBlur={handleBlurSet}
    onMouseDown={(ev) => ev.preventDefault()}
    onClick={() => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }}
    />

    <button 
    className='addTodo_btn'

    tabIndex='0'
    onBlur={handleBlurSet}
    onMouseDown={(ev) => ev.preventDefault()}

    onClick={handleAddTodo}
    >Add Todo</button>

</div>
    
</>
)
}

export default TodoInput
