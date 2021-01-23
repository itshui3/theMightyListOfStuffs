import './_BoardInputWrapper.css'
import React, { useState } from 'react'
import BoardInput from './BoardInput'

function BoardInputWrapper({ pushBoard }) {

    const [addingBoard, setAddingBoard] = useState(false)

    const handleSaveBrd = (boardName) => {

        if (boardName.length > 0) {

            pushBoard('', boardName)
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
handleSave={ handleSaveBrd }
/>)

}
</>
)
}

export default BoardInputWrapper
