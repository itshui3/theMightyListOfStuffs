import React, { useEffect } from 'react'

import './BoardCard.css'

function BoardCard({boardTitle, selectBoard, nestSeq}) {
    
return (
<>
    <div className='boardCard_cont'
    onClick={selectBoard}
    >
        <h2 className='boardCard_title'>{boardTitle}</h2>
    </div>
</>
)
}

export default BoardCard
