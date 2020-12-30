import React, { useState } from 'react'
import './App.css';

import { Board } from './components'
import { Dashboard } from './components'

import { dummyList } from './components/Board/assets/dummyList.js'

function App() {

    const [selectedBoard, setSelectedBoard] = useState(-1)

    const [boardList, setBoardList] = useState([])
    const [user, setUser] = useState({name: 'itsYaBoiHui'})

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
    <Dashboard 
    selectBoard={selectBoard}
    pushBoard={pushBoard}
    boards={boardList}
    user={user.name}
    />
    {
    selectedBoard > -1
    ?
    <Board 
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
