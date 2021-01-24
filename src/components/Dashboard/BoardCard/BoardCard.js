import React, { useEffect } from 'react'

import './BoardCard.css'

// pgId prop is parent container
function BoardCard({ board, selectBoard, indent, pgId, username }) {
    const indentation = { paddingLeft: `${indent * 10}px` }
return (
<>
    <div 
    className='boardCard_cont'
    onClick={() => selectBoard(board, pgId)}
    style={indentation}>
        <div className='boardIcon_cont'>

        </div>
        <h2 className='boardCard_title'>{board.title}</h2>
    </div>
</>
)
}

export default BoardCard
