import React, { useState } from 'react'
import './App.css';

import { Board } from './components'
import { Dashboard } from './components'

import { dummyBoards } from './assets/dummyBoards.js'
import { dummyPages } from './assets/dummyPages.js'

function App() {

    const [selectedBoard, setSelectedBoard] = useState({})

    const [boardList, setBoardList] = useState(dummyBoards)

    const [pageList, setPageList] = useState(dummyPages)
    const [user, setUser] = useState({name: 'itsYaBoiHui'})

    const deselectBoard = () => {
        setSelectedBoard({})
    }

    const selectBoard = (boardIdx) => {

        setSelectedBoard(
            boardList.find((board) => board.idx === boardIdx)
        )
    }

    const pushBoard = (board, nestSeq) => {
        // setBoardList(boards => {
        //     return [...boards, board]
        // })
    }

    // [0] how do I determine nesting level at which to add the page? 
    const pushPage = (page, nestSeq) => {
        console.log('in pushPage')

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
    Object.keys(selectedBoard).length > 0
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
