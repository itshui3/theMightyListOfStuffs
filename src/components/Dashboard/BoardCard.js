import React, { useEffect } from 'react'

import './BoardCard.css'

function BoardCard({boardTitle, selectBoard}) {
    
return (
<>
    <div className='dashboard_card'
    onClick={selectBoard}
    >
        <h2 className='dashboard_boardTitle'>{boardTitle}</h2>
    </div>
</>
)
}

export default BoardCard
