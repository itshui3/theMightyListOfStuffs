import React from 'react'

import './Task.css'

function Task({ task, taskID }) {
    return (
        <>
            <div className='task_card' key={taskID} id={taskID}>
                <h3 className='task_title'>{ task.name }</h3>
                {
                task.todos.length > 0
                    ?
                    task.todos.map((todo, todoID) => (
                        <div className='todo_card' key={todoID}>
                        { todo }
                        </div>
                    ))
                    :
                    null
                }
            </div>
        </>
    )
}

export default Task
