import React, {useState} from 'react'

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
onBlur={handleBlurSet}
onMouseDown={preventBlur}
onMouseUp={releasePreventBlur}
>
    <input 
    className='taskInput_cont'

    value={task}
    onChange={writeTask}

    ref={taskInputRef}

    onBlur={handleBlurSet}
    onMouseDown={preventBlur}
    onMouseUp={releasePreventBlur}
    />
    <button
    onBlur={handleBlurSet}
    onMouseDown={preventBlur}
    onMouseUp={releasePreventBlur}

    onClick={handleAddTask}
    >Add Task</button>
</div>


</> 
)
}

export default TaskInput
