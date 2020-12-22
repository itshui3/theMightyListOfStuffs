import React, {useState} from 'react'

import './Task.css'

function Task({ task, taskID }) {

    const [addingTodo, setAddingTodo] = useState(false)

    const startAddingTodo = () => {
        setAddingTodo(true)
    }

    const stopAddingTodo = () => {
        setAddingTodo(false)
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
            {
                addingTodo
                ?
                <input 
                className='todo_card' 
                placeholder='Add Todo'
                onBlur={stopAddingTodo}
                />
                :
                <button 
                className='todo_card' 
                placeholder='Add Todo'
                onClick={startAddingTodo}
                />
            }

        </>
        ))
        :
        null
    }
</div>

</>
)
}

export default Task
