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

        if(!lock) {
            toggleAddingTodo()
        }

    }

    const handleAddTodo = (ev) => {

        if (todo.length) {
            toggleAddingTodo()
            addTodo()
        } else {
            todoInputRef.current.focus()
        }


    }

    const lock_relock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }

return (
<>

<div 
className='input_cont' 

onMouseDown={(ev) => ev.preventDefault()}
onClick={lock_relock}
onBlur={handleBlurSet}
>

    <input
    className='todo_card'
    value={todo}
    onChange={writeTodo}
    ref={todoInputRef}
    />

    <button 
    className='addTodo_btn'

    onClick={handleAddTodo}
    >Add Todo</button>

</div>
    
</>
)
}

export default TodoInput
