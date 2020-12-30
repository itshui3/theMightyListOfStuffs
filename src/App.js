import React, { useState } from 'react'
import './App.css';

import { Board } from './components'
import { Dashboard } from './components'

import { dummyList } from './components/Board/assets/dummyList.js'

function App() {

    const [selectedBoard, setSelectedBoard] = useState(-1)

    const [boardList, setBoardList] = useState([])

    const [pageList, setPageList] = useState([])
    const [user, setUser] = useState({name: 'itsYaBoiHui'})

    const deselectBoard = () => {
        setSelectedBoard(-1)
    }

    const selectBoard = (boardIdx) => {
        setSelectedBoard(boardIdx)
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
    pushPage={pushPage}
    pushBoard={pushBoard}
    // I think I just need pages
    pages={pageList}
    user={user.name}
    />
    {
    selectedBoard > -1
    ?
    <Board 
    // selection will proc http req, feeding a board
    board={boardList[selectedBoard]}
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
