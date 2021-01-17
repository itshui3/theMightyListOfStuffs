import React, { useState, useEffect } from 'react'

import { useMutation } from '@apollo/client'

import { addPageMutationQuery } from './_pageQueries.js'

import BoardCard from './BoardCard/BoardCard.js'
import PageCard from './PageCard/PageCard.js'

import BoardInput from './Input/BoardInput.js'
import PageInput from './Input/PageInput.js'

import './Dashboard.css'

function Dashboard({ pgs, boards, selectBoard, pushBoard, username }) {
    // subsequent fetches made with lazyQuery
    // conditionally use data fetched instead of pages prop
    const [pages, setPages] = useState(pgs)

    useEffect(() => {
        setPages(pgs)
    }, [pgs])

    const addPageMutationResp = useMutation(addPageMutationQuery)
    const [addPage, addPageResp] = addPageMutationResp

    // useEffect(() => {

    //     if (
    //         addPageResp && 
    //         addPageResp.data &&
    //         addPageResp.data.user) {
    //         const { user } = addPageResp.data

    //         setPages([...user.pages])
    //     }
    // }, [addPageResp])

    const pushPage = (rootID, title) => {
        // username <- from props
        // rootID <- from within page
        addPage({ 

            variables: { 
                username: username,
                title: title,
                rootID: rootID ? rootID : ''
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
