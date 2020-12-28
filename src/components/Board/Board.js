import React, { useState, useRef, useEffect } from 'react'
import './Board.css'

import { dummyList } from './assets/dummyList.js'

import Task from './components/Task.js'
import TaskInput from './components/TaskInput.js'

function Board() {

    const [boardTitle, setBoardTitle] = useState(null)
    const [taskList, setTaskList] = useState(dummyList)

    // new task input handling
    const [task, setTask] = useState('')
    const [addingTask, setAddingTask] = useState(false)
    
    const taskInputRef = useRef()

    const toggleAddingTask = () => {
        setAddingTask(addingTask => !addingTask)
    }

    const writeTask = (ev) => {
        setTask(ev.target.value)
    }

    const addTask = (task) => {

        const newTask = {
            name: task,
            todos: []
        }
        setTaskList((taskList) => {
            return [
                ...taskList,
                newTask
            ]
        })
    }

    const removeTask = (taskID) => {
        setTaskList(taskList => {
            return taskList.filter((t, idx) => {
                return idx !== taskID
            })
        })
    }
// todo handling
    const addTodo = (taskID) => (todo) => {
        if (!todo.length) { return }
        // find task, then append a todo to it
        setTaskList(taskList.map((task, idx) => {

            if (idx === taskID) {
                return {
                    ...task,
                    todos: [
                        ...task.todos,
                        todo
                    ]
                }
            } else {
                return task
            }

        }))
    }

    const removeTodo = (taskID) => (todoID) => {
        // find task
        setTaskList(taskList.map((task, idx) => {

            if (idx === taskID) {
                // construct a new array with everything that doesn't meet the condition of having the id of the one I want removed
                const newTodos = task.todos.filter((todo, idx) => idx !== todoID)

                return {
                    ...task,
                    todos: [
                        ...newTodos
                    ]
                }
            } else {
                return task
            }
        }))
    }


return (
<>

<div className='board_wrapper'>

    <div className='board_header'>
        <h1 className='board_title header_items'>
        {
        boardTitle 
            ? boardTitle 
            : 'Placeholder'
        }
        </h1>

    </div>

    <div className='board_body'>
    {
    taskList.length > 0
        ?
        taskList.map((task, taskID) => (

            <Task 
            key={taskID}

            task = {task}
            taskID = {taskID}
            addTask = {addTask}
            addTodo = {addTodo(taskID)}
            removeTask = {removeTask}
            removeTodo = {removeTodo(taskID)}

            setTaskList={setTaskList}
            />

        ))
        :
        null
    }

    {
        addingTask
        ?
        <TaskInput 
        task={task}
        writeTask={writeTask}
        toggleAddingTask={toggleAddingTask}
        taskInputRef={taskInputRef}
        addTask={addTask}
        />
        :
        <button 
        className='task_card startAddingTaskBtn'
        onClick={toggleAddingTask}
        >Add Task</button>
    }

    </div>
        
</div>

</>
)
}

export default Board;