import React from 'react'
import './Board.css'

import { useState } from 'react'
import { dummyList } from './assets/dummyList.js'

import Task from './components/Task.js'

function Board() {

    const [boardTitle, setBoardTitle] = useState(null)
    const [taskList, setTaskList] = useState(dummyList)
    // I'll want taskList as useTaskList
    // so as to handle the nested data logic separately

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
            task = {task}
            taskID = {taskID}
            />

        ))
        :
        null
    }
    </div>
        
</div>

</>
)
}

export default Board;