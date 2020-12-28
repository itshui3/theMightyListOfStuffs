import React, { useState } from 'react'

function BoardInput({ pushBoard }) {

    const [board, setBoard] = useState('')

    const handleWrite = (ev) => {
        setBoard(ev.target.value)
    }

return (
<>
    <div className='dashboard_boardBuilder'>
        <input
        value={board}
        onChange={handleWrite}
        />
        <button
        onClick={() => {
            const newBoard = {
                title: board,
                tasks: []
            }
            pushBoard(newBoard)
            setBoard('')
        }}
        >Add Board</button>
    </div>
</>
)
}

export default BoardInput
