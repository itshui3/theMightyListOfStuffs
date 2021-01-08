import React, { useEffect } from 'react'

import './BoardCard.css'

function BoardCard({board, selectBoard, nestSeq}) {
    const indentation = { paddingLeft: `${nestSeq.length * 10}px` }
return (
<>
    <div 
    className='boardCard_cont'
    onClick={() => selectBoard(board)}
    style={indentation}>
        <div className='boardIcon_cont'>

        </div>
        <h2 className='boardCard_title'>{board.title}</h2>
    </div>
</>
)
}

export default BoardCard
