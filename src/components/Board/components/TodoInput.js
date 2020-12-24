import React, { useState, useEffect, useRef } from 'react'

import './TodoInput.css'

function TodoInput({
    todo, 
    writeTodo, 
    toggleAddingTodo, 
    todoInputRef,
    addTodo,
}) {

    const [allowBlur, setAllowBlur] = useState(true)

    const preventBlur = () => {
        setAllowBlur(false)
    }

    const releasePreventBlur = () => {
        setAllowBlur(true)
    }

    const handleBlurSet = () => {

        if (allowBlur) {
            toggleAddingTodo()
        }

    }

    const handleAddTodo = () => {
        if (todo.length) {
            toggleAddingTodo()
            addTodo()
        }
    }

return (
<>

<div 
className='input_cont' 

onBlur={handleBlurSet}
onMouseDown={preventBlur}
onMouseUp={releasePreventBlur}
>

    <input
    className='todo_card'
    value={todo}
    onChange={writeTodo}
    ref={todoInputRef}

    onBlur={handleBlurSet}
    onMouseDown={preventBlur}
    onMouseUp={releasePreventBlur}
    />

    <button 
    className='addTodo_btn'
    onClick={handleAddTodo}

    onBlur={handleBlurSet}
    onMouseDown={handleAddTodo}
    onMouseUp={releasePreventBlur}
    >Add Todo</button>

</div>
    
</>
)
}

export default TodoInput
