import './_inputs.sass'
import React, { useState, useEffect, useRef } from 'react'

import AddItemRootSVG from './AddItemRootSVG'

function BoardInput({ handleSave, unMountOnBlur }) {

    const [board, setBoard] = useState('')

    const [lock, setLock] = useState(false)

    const boardInputRef = useRef()

    useEffect(() => { boardInputRef.current.focus() }, [])

    const handleWrite = (ev) => { setBoard(ev.target.value) }

    const handleBlur = () => {
        if (!lock) { unMountOnBlur() }
    }

    const lockUnlock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, 0.0001)
    }

return (
<>
    <div 
    className='rootInput_cont'
    onMouseDown={(ev) => ev.preventDefault()}
    onBlur={handleBlur}
    onClick={lockUnlock}
    >
        <input
        className='addingBoard_input'
        onChange={handleWrite}
        value={board}
        ref={boardInputRef}
        />
        <div
        className='rootInput_cont'
        onClick={() => handleSave(board)}>
            <AddItemRootSVG />
            <p className='rootInput_text'>Save Board</p>
        </div>
    </div>

</>
)
}

export default BoardInput
