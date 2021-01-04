import React, { useEffect, useState } from 'react'
import './App.css';

import { gql, useQuery } from '@apollo/client'

import { Board } from './components'
import { Dashboard } from './components'

import { dummyPages } from './assets/dummyPages.js'

function App() {

    const [user, setUser] = useState({name: 'Hui Z.'})
    const [pageList, setPageList] = useState(dummyPages)

    const [selectedBoard, setSelectedBoard] = useState({})
    const deselectBoard = () => { setSelectedBoard({}) }

    const selectBoard = (nestSeq, boardIdx) => {
        // nestSeq = [pgId1, pgId2, pgId3, adnauseum...]
        // pageList.pages[nestSeq[0]].pages[nestSeq[1]].boards[boardIdx]

        let bookmark = 0
        let curPage = pageList

        while (bookmark < nestSeq.length) {
            curPage = curPage.pages[nestSeq[bookmark]]
            bookmark += 1
        }

        const selectThisBoard = curPage.boards[boardIdx]

        if (selectThisBoard !== undefined) { 
            setSelectedBoard(() => {})
            setTimeout(() => setSelectedBoard(selectThisBoard), .0001) 
        }
        // but why do I need to do it this way? 
    }

    const pushBoard = (board, nestSeq) => {}

    // [0] how do I determine nesting level at which to add the page? 
    const pushPage = (page, nestSeq) => {

        const newPage = {

            type: 'page', 
            title: page,
            // render pages first
            pages: [],
            // then boards under
            boards: []
            // boards[n]: { type: 'board', name: String, idx: Number }

        }
        setPageList(pages => {
            const copiedPages = JSON.parse(JSON.stringify(pages))
            return copiedPages
        })
    }



return (
<>

<div className="App">
    <Dashboard 
    selectBoard={selectBoard}
    // Create
    pushPage={pushPage}
    pushBoard={pushBoard}

    pages={pageList}
    user={user.name}
    />
    {
    selectedBoard && Object.keys(selectedBoard).length > 0
    ?
    <Board 
    // selection will proc http req, feeding a board
    board={selectedBoard}
    deselectBoard={deselectBoard}
    />
    :
    null
    }
</div>

</>
);
}

export default App;
