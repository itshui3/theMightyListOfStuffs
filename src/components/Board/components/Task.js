import React, {useEffect, useState, useRef} from 'react'

import './Task.css'

import TodoInput from './TodoInput.js'


function Task({ task, taskID, removeTask, addTodo, removeTodo }) {

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
    <div className='task_header'>
        <h3 className='task_headerObj'>{ task.name }</h3>
        <div 
        className='task_headerObj'
        onClick={() => removeTask(taskID)}
        >x</div>
    </div>
    
    {
        task.todos.length > 0
            ?
            task.todos.map((todo, todoID) => (
            <>
            <div className='todo_card' key={todoID}>
                <p className='todo_txt'>{ todo }</p>
                <div className='panel_mutateTodo'>
                    <div 
                    className='remove_todo todoMutator'
                    onClick={() => removeTodo(todoID)}
                    >x</div>
                    <div
                    className='edit_todo todoMutator'
                    >edit</div>
                </div>
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
    className='todo_card startAddingTodoBtn'
    onClick={toggleAddingTodo}
    >Add Todo</button>
    }
    
</div>

</>
)
}

export default Task
