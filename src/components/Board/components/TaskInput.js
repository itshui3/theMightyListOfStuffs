import React, {useState, useRef} from 'react'

function TaskInput({
    task, 
    writeTask, 
    toggleAddingTask, 
    taskInputRef,
    addTask,
}) {

    const [allowBlur, setAllowBlur] = useState(true)

    const preventBlur = () => {
        setAllowBlur(false)
    }

    const releasePreventBlur = () => {
        setAllowBlur(true)
    }

    const handleBlurSet = () => {

        if (allowBlur) {
            toggleAddingTask()
        } else {
            setAllowBlur(true)
        }

    }

    const handleAddTask = () => {
        if (task.length) {
            toggleAddingTask()
            addTask(task)
        }

    }

return (
<>

<div
className='task_card'

onBlur={handleBlurSet}
onMouseDown={preventBlur}
>
    <input 
    className='taskInput_cont'

    value={task}
    onChange={writeTask}

    ref={taskInputRef}

    onBlur={handleBlurSet}
    onMouseDown={preventBlur}

    />
    <button
    onClick={handleAddTask}

    onBlur={handleBlurSet}
    onMouseDown={preventBlur}

    >Add Task</button>
</div>


</> 
)
}

export default TaskInput
