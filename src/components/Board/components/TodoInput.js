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
        preventBlur()
        toggleAddingTodo()
        addTodo()
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

    onClick={addTodo}
    >Add Todo</button>

</div>
    
</>
)
}

export default TodoInput
