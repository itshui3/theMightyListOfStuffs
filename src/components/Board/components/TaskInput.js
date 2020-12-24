import React from 'react'

function TaskInput({
    task, 
    writeTask, 
    toggleAddingTask, 
    taskInputRef,
    addTodo,
}) {
return (
<>

<input 
className='taskInput_cont'
ref={taskInputRef}
/>

</> 
)
}

export default TaskInput
