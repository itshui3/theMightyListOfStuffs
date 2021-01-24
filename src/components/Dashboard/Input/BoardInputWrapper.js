import './_inputs.sass'
import React, { useState } from 'react'

// compos
import AddItemRootSVG from './AddItemRootSVG'
import BoardInput from './BoardInput'

const hoverCont = { backgroundColor: 'rgba(0, 0, 0, .3)' }

function BoardInputWrapper({ pushBoard }) {

    const [addingBoard, setAddingBoard] = useState(false)

    const [hover, setHover] = useState(false)

    const handleSaveBrd = (boardName) => {

        if (boardName.length > 0) {

            pushBoard('', boardName)
            setAddingBoard(false)
        }

    }

    const unMountOnBlur = () => {
        setAddingBoard(false)
    }

    const handleHover = (isHover) => { setHover(isHover) }

return (
<>
{

!addingBoard

?

(<div className='rootInput_cont' onClick={() => { setAddingBoard(true) } }
style={hover ? hoverCont : null}

onMouseOver={() => handleHover(true)}
onMouseOut={() => handleHover(false)}
>
    <AddItemRootSVG />
    <p className='rootInput_text'>Add Board</p>
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
