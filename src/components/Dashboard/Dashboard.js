import React, { useState, useEffect } from 'react'

import BoardCard from './BoardCard.js'
import PageCard from './PageCard/PageCard.js'

import BoardInput from './Input/BoardInput.js'
import PageInput from './Input/PageInput.js'

import './Dashboard.css'

function Dashboard({ pages, boards, selectBoard, pushBoard, pushPage, username }) {

return (
<>
    <div className='dashboard_cont'>
        <div className='dashboard_userInfo'>
            <p className='userInfo_userName'>{username}</p>
        </div>

        <div className='dashboard_cardsCont'>

            {        
                pages && pages.length > 0
                ?
                pages.map((page, idx) => (
                    <PageCard 
                    username={username}
                    key={idx}
                    page={page}
                    nestSeq={[page.id]}
                    selectBoard={selectBoard}
                    />))
                :
                null
            }

            {
                boards && boards.length > 0
                ?
                boards.map((board, idx) => (
                    <BoardCard 
                    key={idx} 
                    board={board}
                    nestSeq={[]}
                    selectBoard={selectBoard}
                    />))
                :
                null
            }

        </div>
                
        
        {/* <BoardInput pushBoard={pushBoard} /> */}

        <PageInput 
        pushPage={pushPage}
        pushBoard={pushBoard}
        />
    </div>
</>
)
}

export default Dashboard
