import React, { useState, useEffect } from 'react'

import { useMutation } from '@apollo/client'

import { addPageMutation } from './_pageQueries.js'

import BoardCard from './BoardCard/BoardCard.js'
import PageCard from './PageCard/PageCard.js'

import BoardInput from './Input/BoardInput.js'
import PageInput from './Input/PageInput.js'

import './Dashboard.css'

function Dashboard({ pgs, boards, selectBoard, pushBoard, username }) {
    // subsequent fetches made with lazyQuery
    // conditionally use data fetched instead of pages prop
    const [pages, setPages] = useState(pgs)

    const addPageMutation = useMutation(addPageMutation)
    const [addPage, addPageResp] = addPageMutation

    const pushPage = (rootID, title) => {
        // username <- from props
        // rootID <- from within page

        // const newPage = {

        //     type: 'page', 
        //     title: page,
        //     // render pages first
        //     pages: [],
        //     // then boards under
        //     boards: []
        //     // boards[n]: { type: 'board', name: String, idx: Number }

        // }
        // setPageList(pages => {
        //     const copiedPages = JSON.parse(JSON.stringify(pages))
        //     return copiedPages
        // })
        addPage({ 

            variables: { 
                username: username,
                title: title,
                rootID: rootID
            } 
        
        })
    }

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
