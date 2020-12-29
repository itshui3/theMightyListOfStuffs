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

    useEffect(() => {
        todoInputRef.current.focus()
    }, [])

    const handleBlurSet = (ev) => {

        if(!lock) {
            toggleAddingTodo()
        }

    }

    const lock_relock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }

    const handleAddTodo = () => {

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
className='todoInput_cont' 

onMouseDown={(ev) => ev.preventDefault()}
onClick={lock_relock}
onBlur={handleBlurSet}
>

    <input
    className='addTodoInput'
    value={todo}
    onChange={writeTodo}
    ref={todoInputRef}
    />

    <div 
    className='addTodoBtn'

    onClick={handleAddTodo}
    >+Add Item</div>

</div>
    
</>
)
}

export default TodoInput
