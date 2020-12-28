import React, { useState } from 'react'
import './App.css';

import { Board } from './components'
import { Dashboard } from './components'

import { dummyList } from './components/Board/assets/dummyList.js'

function App() {

    const [selectedBoard, setSelectedBoard] = useState(-1)

    const [boardList, setBoardList] = useState([])

    const deselectBoard = () => {
        setSelectedBoard(-1)
    }

    const selectBoard = (boardIdx) => {
        setSelectedBoard(boardIdx)
    }

    const pushBoard = (board) => {
        setBoardList(boards => {
            return [...boards, board]
        })
    }

return (
<>

<div className="App">
    {
    selectedBoard > -1
    ?
    <Board 
    board={boardList[selectedBoard]}
    deselectBoard={deselectBoard}
    />
    :
    <Dashboard 
    selectBoard={selectBoard}
    pushBoard={pushBoard}
    boards={boardList}
    />
    }
</div>

</>
);
}

export default App;
