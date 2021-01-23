import './_BoardInputWrapper.css'
import React, { useState } from 'react'
import BoardInput from './BoardInput'

function BoardInputWrapper({ pushBoard, pgId }) {

    const [addingBoard, setAddingBoard] = useState(false)

    const handleSaveBrd = (pgId) => (boardName) => {

        if (boardName.length > 0) {

            const newBoard = {
                title: boardName,
                tasks: []
            }

            pushBoard(pgId, JSON.stringify(newBoard))
            setAddingBoard(false)
        }

    }

    const unMountOnBlur = () => {
        setAddingBoard(false)
    }

return (
<>
{

!addingBoard

?

(<div className='boardInput_notAddingBoard'>
    <p className='notAddingBoard_btn'
    onClick={() => { setAddingBoard(true) } }>+ Add Board</p>
</div>)

:

(<BoardInput
unMountOnBlur={ unMountOnBlur }
handleSave={ handleSaveBrd(pgId) }
/>)

}
</>
)
}

export default BoardInputWrapper
