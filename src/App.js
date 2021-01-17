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

    const [user, setUser] = useState({})

    useEffect(() => {

        if (loginResp.data) { 
            console.log('loginResp.data', loginResp.data)
            setUser(loginResp.data.user)
        } 
        
        else if (regResp.data) setUser(regResp.data.addUser)

    }, [loginResp, regResp])

    if (loginResp.loading || regResp.loading) return <Loading />
    if (loginResp.error || regResp.error) return <h1>Error: {loginResp.error ? JSON.stringify(loginResp.error) : JSON.stringify(regResp.error)}</h1>
    if (!loginResp.data && !regResp.data) return (<Auth authAPI={authAPI} />)

// rewrite this so that it doesn't just render same data once 1.16.21
// [0] - next todo
// [1] - user comes from data.user if login
// [2] - user comes from data.addUser if reg

    // const [pgs, setPgs] = useState(pages)
    // const [brds, setBrds] = useState(boards)

    // useEffect(() => {

    // }, [])

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

    pgs={user.pages}
    boards={user.boards}
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
