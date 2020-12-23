import React, {useEffect, useState, useRef} from 'react'

import './Task.css'

import TodoInput from './TodoInput.js'


function Task({ task, taskID, addTodo }) {

    const [addingTodo, setAddingTodo] = useState(false)
    const [todo, setTodo] = useState('')

    const todoInputRef = useRef()

    useEffect(() => {

        if (addingTodo && todoInputRef.current) {
            todoInputRef.current.focus()
        }

    }, [addingTodo])

    const toggleAddingTodo = () => {
        setAddingTodo(!addingTodo)
        setTodo('')
    }

    const writeTodo = (ev) => {
        setTodo(ev.target.value)
    }

return (
<>

<div className='task_card' key={taskID} id={taskID}>
    <h3 className='task_title'>{ task.name }</h3>
    {
        task.todos.length > 0
            ?
            task.todos.map((todo, todoID) => (
            <>
            <div className='todo_card' key={todoID}>
            { todo }
            </div>

            </>
            ))
            :
            null
    }

    {
    addingTodo
    ?
    <TodoInput 
    todo={todo}
    writeTodo={writeTodo}
    toggleAddingTodo={toggleAddingTodo}
    todoInputRef={todoInputRef}
    addTodo={() => addTodo(todo)}
    />
    :
    <button 
    className='todo_card'
    placeholder='Add Todo'
    onClick={toggleAddingTodo}
    />
    }
    
</div>

</>
)
}

export default Task
