import React, {useState, useEffect, useRef} from 'react'

import './TaskInput.css'

function TaskInput({
    task, 
    writeTask, 
    toggleAddingTask, 
    taskInputRef,
    addTask,
}) {

    const [lock, setLock] = useState(false)

    useEffect(() => {
        taskInputRef.current.focus()
    }, [])

    const handleBlurSet = (ev) => {
        console.log('in handleBlurSet')
        if(!lock) {
            toggleAddingTask()
        }

    }

    const lock_relock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }

    const handleAddTask = () => {

        if (task.length) {
            toggleAddingTask()
            addTask(task)
        } else {
            taskInputRef.current.focus()
        }

    }

return (
<>

<div
className='task_card taskInput_cont'

onMouseDown={(ev) => ev.preventDefault()}
onClick={lock_relock}
onBlur={handleBlurSet}
>
    <input 
    className='addTaskInput'
    value={task}
    onChange={writeTask}
    ref={taskInputRef}
    />
    <div
    className='addTaskBtn'

    onClick={handleAddTask}
    >+Add Task</div>
</div>


</> 
)
}

export default TaskInput
