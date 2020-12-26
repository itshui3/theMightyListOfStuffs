import React, {useEffect, useState, useRef} from 'react'

import './Task.css'

import TodoInput from './TodoInputTimeout.js'
import Todo from './Todo.js'


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
            task.todos.map((todo, todoID) => <Todo todoID={todoID} todo={todo} removeTodo={removeTodo} />)
            :
            null
    }

    {
    addingTodo
    ?
    <TodoInput 
    taskID={taskID}

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
