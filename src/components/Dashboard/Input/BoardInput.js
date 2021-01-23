import './_BoardInput.css'
import React, { useState, useEffect, useRef } from 'react'

function BoardInput({ handleSave, unMountOnBlur }) {

    const [board, setBoard] = useState('')

    const [lock, setLock] = useState(false)

    const boardInputRef = useRef()

    useEffect(() => { boardInputRef.current.focus() }, [])

    const handleWrite = (ev) => { setBoard(ev.target.value) }

    // const handleAddingBoard = () => {
    //     setAddingBoard(true)
    //     setTimeout(() => {
    //         boardInputRef.current.focus()
    //     }, .0001)

    // }

    // const handleAddBoard = (ev) => {

    //     const newBoard = {
    //         type: 'board',
    //         title: board,
    //         tasks: []
    //     }
    //     pushBoard(newBoard)
    //     setBoard('')
    //     setAddingBoard(false)

    // }

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
    className='boardInput_addingBoard'
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
        className='addingBoard_saveBtn'
        onClick={() => handleSave(board)}>+ Save Board</div>
    </div>

</>
)
}

export default BoardInput
