import './App.css'
import React, { useEffect, useState } from 'react'

import { useLazyQuery, useMutation } from '@apollo/client'

import { Board } from './components'
import { Dashboard } from './components'
import { Auth } from './components'
import { Loading } from './components'

import { loginQuery, regMutation } from './reqs/_authQueries.js'

function App() {

    const [selectedBoard, setSelectedBoard] = useState({})

    // login/reg queries
    const lazyLoginResponse = useLazyQuery(loginQuery)
    const lazyRegResponse = useMutation(regMutation)

    const [getUser, loginResp] = lazyLoginResponse
    const [addUser, regResp] = lazyRegResponse
    const authAPI = { 'getUser': getUser, 'addUser': addUser }

    if (loginResp.loading || regResp.loading) return <Loading />
    if (loginResp.error || regResp.error) return <h1>Error: {loginResp.error ? JSON.stringify(loginResp.error) : JSON.stringify(regResp.error)}</h1>
    if (!loginResp.data && !regResp.data) return (<Auth authAPI={authAPI} />)

    let user;

    if (loginResp.data) { 
        console.log('loginResp.data', loginResp.data)
        user = loginResp.data.user
    } 
    
    else if (regResp.data) { user = regResp.data.addUser }
    else return <h1>Error, couldn't load data</h1>

    const { pages, boards } = user

    const deselectBoard = () => { setSelectedBoard({}) }

    const selectBoard = (board) => {
        setSelectedBoard(board)
    }

    const pushBoard = (board, nestSeq) => {}

return (
<>

<div className="App">

    <Dashboard 
    selectBoard={selectBoard}
    // Create
    pushBoard={pushBoard}

    pgs={pages}
    boards={boards}
    username={user.name}
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
