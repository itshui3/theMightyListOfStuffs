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
        // lock_relock()

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

onBlur={handleBlurSet}
// why woudln't onMousDown be req in nested children?
onMouseDown={(ev) => ev.preventDefault()}
onClick={lock_relock}
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
