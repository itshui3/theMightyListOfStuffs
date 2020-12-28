import React, { useState } from 'react'

import BoardCard from './BoardCard.js'
import BoardInput from './BoardInput.js'

function Dashboard({ boards, selectBoard, pushBoard }) {

return (
<>
    <BoardInput pushBoard={pushBoard} />

    <div className='dashboard_cardsCont'>

        {        
        boards && boards.length > 0
        ?
        boards.map((board, idx) => (
        <BoardCard 
        key={idx} 
        boardIdx={idx}
        boardTitle={board.title}
        selectBoard={selectBoard}
        />
        ))
        :
        null
        }

    </div>
</>
)
}

export default Dashboard
