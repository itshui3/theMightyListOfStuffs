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
    const [selectedBoardPgId, setSelectedBoardPgId] = useState('')

    // login/reg queries
    const lazyLoginResponse = useLazyQuery(loginQuery)
    const lazyRegResponse = useMutation(regMutation)

    const [getUser, loginResp] = lazyLoginResponse
    const [addUser, regResp] = lazyRegResponse
    const authAPI = { 'getUser': getUser, 'addUser': addUser }

    const [user, setUser] = useState({})

    useEffect(() => {

        if (loginResp.data) { setUser(loginResp.data.user) }
        else if (regResp.data) setUser(regResp.data.addUser)

    }, [loginResp, regResp])

    if (loginResp.loading || regResp.loading) return <Loading />
    if (loginResp.error || regResp.error) return <h1>Error: {loginResp.error ? JSON.stringify(loginResp.error) : JSON.stringify(regResp.error)}</h1>
    if (!loginResp.data && !regResp.data) return (<Auth authAPI={authAPI} />)

    const deselectBoard = () => { setSelectedBoard({}) }

    const selectBoard = (board, pgId) => {
        setSelectedBoardPgId(pgId)
        setSelectedBoard(board)
    }

return (
<>

<div className="App">

    <Dashboard 
    selectBoard={selectBoard}
    // Create

    pgs={user.pages}
    brds={user.boards}
    username={user.name}
    />

    {
    selectedBoard && Object.keys(selectedBoard).length > 0
    ?
    <Board 
    // selection will proc http req, feeding a board
    board={selectedBoard}
    deselectBoard={deselectBoard}
    username={user.name}
    pgId={selectedBoardPgId}
    />
    :
    null
    }
    
</div>

</>
);
}

export default App;
