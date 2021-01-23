import React, { useState, useEffect } from 'react'

import { useMutation } from '@apollo/client'

import { addPageMutationRoot } from './_addPageMutation.js'

import BoardCard from './BoardCard/BoardCard.js'
import PageCard from './PageCard/PageCard.js'

import BoardInputWrapper from './Input/BoardInputWrapper'
import PageInputWrapper from './Input/PageInputWrapper.js'

import './Dashboard.css'

function Dashboard({ pgs, boards, selectBoard, pushBoard, username }) {

    // pages prop in dashboard implies my user fetch needs to grab first layer pgs & boards
    const [addPage, addPageResp] = useMutation( addPageMutationRoot(username) )
    const dummyAddBoard = (boardVars) => {
        // a dummy fn so I can compose addBoard
    }

    const pushPageFactory = (username) =>  (pgId, title) => {

        addPage({ 

            variables: { 
                username: username,
                title: title,
                pgId: pgId.length > 0 ? pgId : ''
            } 
        
        })
    }

    const pushBoardFactory = (username) => (pgId, boardAssets) => {

        // logic to push board, with useMutation deps


    }

return (
<>
    <div className='dashboard_cont'>
        <div className='dashboard_userInfo'>
            <p className='userInfo_userName'>{username}</p>
        </div>

        <div className='dashboard_cardsCont'>

            {
                pgs && pgs.length > 0
                ?
                pgs.map((page, idx) => (
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
        pgId={''}
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
