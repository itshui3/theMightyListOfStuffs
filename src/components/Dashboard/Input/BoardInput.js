import React, { useState, useEffect, useRef } from 'react'

function BoardInput({ pushBoard }) {

    const [board, setBoard] = useState('')
    const [addingBoard, setAddingBoard] = useState(false)
    const [lock, setLock] = useState(false)

    const boardInputRef = useRef()

    useEffect(() => {
        if (addingBoard) { setLock(false) }
    }, [addingBoard])

    const handleWrite = (ev) => {
        setBoard(ev.target.value)
    }

    const handleAddingBoard = () => {
        setAddingBoard(true)
        setTimeout(() => {
            boardInputRef.current.focus()
        }, .0001)

    }

    const handleAddBoard = (ev) => {

        const newBoard = {
            type: 'board',
            title: board,
            tasks: []
        }
        pushBoard(newBoard)
        setBoard('')
        setAddingBoard(false)

    }

    const handleBlur = () => {
        if (!lock) {
            setAddingBoard(false)
        }
    }

    const lockUnlock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, 0.0001)
    }

return (
<>
{    
    !addingBoard
    ?
    (<div className='dashboard_notAddingBoard'>
        <div 
        className='notAddingBoard_btn'
        onClick={handleAddingBoard}>+Add Board</div>
    </div>)
    :
    (<div 
    className='dashboard_addingBoard'
    onMouseDown={(ev) => ev.preventDefault()}
    onClick={lockUnlock}
    onBlur={handleBlur}
    >
        <input
        className='addingBoard_input'
        value={board}
        onChange={handleWrite}
        ref={boardInputRef}
        />
        <div
        className='addingBoard_saveBtn'
        onClick={handleAddBoard}
        >+</div>
    </div>)
}
</>
)
}

export default BoardInput
