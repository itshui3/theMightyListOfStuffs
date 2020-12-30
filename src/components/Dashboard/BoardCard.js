import React from 'react'

import './BoardCard.css'

function BoardCard({boardTitle, boardIdx, selectBoard}) {
return (
<>
    <div className='dashboard_card'
    onClick={() => selectBoard(boardIdx)}
    >
        <h2 className='dashboard_boardTitle'>{boardTitle}</h2>
    </div>
</>
)
}

export default BoardCard
