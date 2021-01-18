import './TodoInput.css'
import React, { useState, useEffect, useRef } from 'react'

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

    const lockRelock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }

    const handleComponentBlur = (ev) => {
        if(!lock) { toggleAddingTodo() }
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
onClick={lockRelock}
onBlur={handleComponentBlur}
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
