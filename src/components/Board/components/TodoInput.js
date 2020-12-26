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

    const handleBlurSet = (ev) => {

        // console.log('ev.relatedTarget', ev.relatedTarget)
        // console.log('ev.relatedTarget.className', ev.relatedTarget.className)

        // if (allowBlur) {
        //     toggleAddingTodo()
        // } else {
        //     releasePreventBlur()
        // }
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
        preventBlur()
        ev.preventDefault()

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
// onMouseDown={(ev) => ev.preventDefault()}
// onClick={(ev) => ev.preventDefault()}
>

    <input
    className='todo_card'
    value={todo}
    onChange={writeTodo}
    ref={todoInputRef}

    tabIndex='0'
    onBlur={handleBlurSet}
    // onMouseDown={(ev) => ev.preventDefault()}
    // onClick={(ev) => ev.preventDefault()}
    />

    <button 
    className='addTodo_btn'

    tabIndex='0'
    onBlur={handleBlurSet}
    // onMouseDown={(ev) => ev.preventDefault()}
    onClick={handleAddTodo}
    // onClick={(ev) => ev.preventDefault()}
    >Add Todo</button>

</div>
    
</>
)
}

export default TodoInput
