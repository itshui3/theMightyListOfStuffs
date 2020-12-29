import React, { useState } from 'react'

import BoardCard from './BoardCard.js'
import BoardInput from './BoardInput.js'

import './Dashboard.css'

function Dashboard({ boards, selectBoard, pushBoard }) {

return (
<>
    <div className='dashboard_cont'>
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
    </div>
</>
)
}

export default Dashboard
