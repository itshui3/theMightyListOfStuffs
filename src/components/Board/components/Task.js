import React, {useEffect, useState, useRef} from 'react'

import './Task.css'

import TodoInput from './TodoInputTimeout.js'
import Todo from './Todo.js'

function Task({ task, taskID, removeTask, addTodo, removeTodo, setTaskList, setDragTaskID, dragTaskID, evaluateDragTask }) {

    const [addingTodo, setAddingTodo] = useState(false)
    const [todo, setTodo] = useState('')
    const [todoDragID, setTodoDragID] = useState(-1)

    const [lighterShadow, setLighterShadow] = useState(false)

    const todoInputRef = useRef()

    const toggleAddingTodo = () => {
        setAddingTodo(!addingTodo)
        setTodo('')
    }

    const writeTodo = (ev) => {
        setTodo(ev.target.value)
    }

    const evaluateDragTodo = (taskID) => (dropID) => {

        if (todoDragID === dropID) { return }

        setTaskList(taskList => {
            let cloneList = JSON.parse(JSON.stringify(taskList))
            // creates a ref to todoList I'm performing dragEvaluate on 
            let todoList = cloneList[taskID].todos
            let carry = todoList[todoDragID]
            todoList[todoDragID] = null

            let start, end;

            if (todoDragID < dropID) {

                start = todoDragID;
                end = dropID;

                for (let i = start; i < end; i++) {
                    let temp = todoList[i]
                    todoList[i] = todoList[i+1]
                    todoList[i+1] = temp
                }

            } else if (dropID < todoDragID) {

                start = dropID;
                end = todoDragID;

                for (let i = end; i > start; i--) {
                    let temp = todoList[i]
                    todoList[i] = todoList[i-1]
                    todoList[i-1] = temp
                }

            }
            todoList[dropID] = carry
            return cloneList
        })
        setTodoDragID(-1)

    }

    const taskShadowSwitch = () => { setLighterShadow(!lighterShadow) }

    const lightShadow = {
        boxShadow: 
        `
        0px 0px 0px 1px rgba(0, 0, 0, .3), 
        3px 4px 2px 1px rgba(0, 0, 0, 0.3)
        `
    }

return (
<>

<div 
className='task_card' 
key={taskID} 
id={taskID}
draggable='true'
onDragStart={() => setDragTaskID(taskID)}
onDragOver={(ev) => ev.preventDefault()}
onDrop={() => {
    if (dragTaskID>-1) evaluateDragTask(taskID)
}}

onMouseEnter={() => setLighterShadow(true)}
onMouseLeave={() => setLighterShadow(false)}
style={lighterShadow ? lightShadow : null}
>
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
            <Todo 
            key={todoID}

            todoID={todoID} 
            todo={todo} 
            removeTodo={removeTodo} 
            todoDragID={todoDragID}
            setTodoDragID={setTodoDragID}
            evaluateDragTodo={evaluateDragTodo(taskID)} 
            taskShadowSwitch={taskShadowSwitch}/>))
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
    <div 
    className='addTodoBtn'
    onClick={toggleAddingTodo}
    >Add Todo</div>
    }
    
</div>

</>
)
}

export default Task
