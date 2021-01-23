import React, { useState, useEffect } from 'react'

import { useMutation } from '@apollo/client'

import { addPageMutationRoot } from './_addPageMutation.js'
import { addBoardMutationRoot } from './_addBoardMutation.js'

import BoardCard from './BoardCard/BoardCard.js'
import PageCard from './PageCard/PageCard.js'

import BoardInputWrapper from './Input/BoardInputWrapper'
import PageInputWrapper from './Input/PageInputWrapper.js'

import './Dashboard.css'

function Dashboard({ pgs, brds, selectBoard, username }) {

    // pages prop in dashboard implies my user fetch needs to grab first layer pgs & boards
    const [addPage, addPageResp] = useMutation( addPageMutationRoot(username) )
    const [addBoard, addBoardResp] = useMutation( addBoardMutationRoot(username) )

    const [pages, setPages] = useState([])
    const [boards, setBoards] = useState([])

    useEffect(() => {
        // initial render page pop
        if (!addPageResp.called) { setPages(pgs) }

        // update pages on mutate
        if (addPageResp.data) {
            console.log('addPageResp', addPageResp)
            setPages(addPageResp.data.addPageRoot.pages)
        }
    }, [addPageResp])

    useEffect(() => {
        // initial render board pop
        console.log('boards init render', brds)
        if (!addBoardResp.called) { setBoards(brds) }

        // update boards on mutate
        if (addBoardResp.data) {
            console.log('addBoardResp', addBoardResp)
            setBoards(addBoardResp.data.addBoardRoot.boards)
        }
        
    }, [addBoardResp])

    const pushPageFactory = (username) =>  (pgId, title) => {

        addPage({ 

            variables: { 
                username: username,
                title: title,
                pgId: pgId
            } 
        
        })
    }

    const pushBoardFactory = (username) => (pgId, title) => {

        // logic to push board, with useMutation deps
        addBoard({ 
            
            variables: {
                username: username,
                title: title,
                pgId: pgId
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
                    pgId={page.id}
                    selectBoard={selectBoard}
                    pushPage={ pushPageFactory(username) }
                    indent={0}
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
                    // instead of passing in pgId / username, just toss it in a thunk so fn has everything provided
                    pgId={''}
                    username={username}
                    indent={0}
                    selectBoard={selectBoard}
                    />))
                :
                null
            }

        </div>

        <BoardInputWrapper
        pushBoard={ pushBoardFactory(username) }
        />
        <PageInputWrapper 
        pushPage={ pushPageFactory(username) }
        pgId={''}
        />
    </div>
</>
)
}

export default Dashboard