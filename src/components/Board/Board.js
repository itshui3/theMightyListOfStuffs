import React, { useState, useRef, useEffect } from 'react'
import './Board.css'

import Task from './components/Task.js'
import TaskInput from './components/TaskInput.js'

function Board({ board, deselectBoard }) {

    const [boardTitle, setBoardTitle] = useState(() => {
        return board && board.title ? board.title : 'placeholder'
    })
    const [taskList, setTaskList] = useState(() => {
        return board && board.tasks && board.tasks.length > 0 ? board.tasks : []
    })

    const [task, setTask] = useState('')
    const [addingTask, setAddingTask] = useState(false)

    const [dragTaskID, setDragTaskID] = useState(-1)
    
    const taskInputRef = useRef()

    const toggleAddingTask = () => {
        setAddingTask(addingTask => !addingTask)
        setTask('')
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
        setTaskList(taskList.map((task, idx) => {

            if (idx === taskID) {

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

    const evaluateDragTask = (dropTaskID) => {
        if (dropTaskID === dragTaskID) { return }

        setTaskList(taskList => {
            let cloneList = JSON.parse(JSON.stringify(taskList))

            let carry = cloneList[dragTaskID]
            cloneList[dragTaskID] = null

            let start, end;

            if (dragTaskID < dropTaskID) {
                start = dragTaskID;
                end = dropTaskID;

                for (let i = start; i < end; i++) {
                    let temp = cloneList[i]
                    cloneList[i] = cloneList[i+1]
                    cloneList[i+1] = temp
                }

            } else if (dropTaskID < dragTaskID) {

                start = dropTaskID;
                end = dragTaskID;

                for (let i = end; i > start; i--) {
                    let temp = cloneList[i]
                    cloneList[i] = cloneList[i-1]
                    cloneList[i-1] = temp
                }
            }
            cloneList[dropTaskID] = carry

            return cloneList
        })
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

        <div
        className='board_header__deselectBtn'
        onClick={deselectBoard}
        >Deselect Board</div>

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

            dragTaskID={dragTaskID}
            setDragTaskID={setDragTaskID}
            evaluateDragTask={evaluateDragTask}
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
        <div 
        className='addingTaskBtn'
        onClick={toggleAddingTask}
        >Add Task</div>
    }

    </div>
        
</div>

</>
)
}

export default Board;