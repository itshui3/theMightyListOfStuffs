import React, { useState, useEffect } from 'react'

import BoardCard from './BoardCard.js'
import PageCard from './PageCard.js'

import BoardInput from './Input/BoardInput.js'
import PageInput from './Input/PageInput.js'

import './Dashboard.css'

function Dashboard({ pages, selectBoard, pushBoard, pushPage, username }) {

return (
<>
    <div className='dashboard_cont'>
        <div className='dashboard_userInfo'>
            <p className='userInfo_userName'>{username}</p>
        </div>


        <div className='dashboard_cardsCont'>

            {        
                pages && pages.pages.length > 0
                ?
                pages.pages.map((page, idx) => (
                    <PageCard 
                    key={idx}
                    pageIdx={idx}
                    page={page}
                    nestSeq={[idx]}
                    selectBoard={selectBoard}
                    />))
                :
                null
            }

            {
                pages && pages.boards.length > 0
                ?
                pages.boards.map((board, idx) => (
                    <BoardCard 
                    key={idx} 
                    boardTitle={board.title}
                    selectBoard={() => selectBoard([], idx)}
                    nestSeq={[idx]}
                    />))
                :
                null
            }

        </div>
                
        
        {/* <BoardInput pushBoard={pushBoard} />

        <PageInput 
        pushPage={pushPage}
        pushBoard={pushBoard}
        /> */}
    </div>
</>
)
}

export default Dashboard
