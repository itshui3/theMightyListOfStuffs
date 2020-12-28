import React, { useState } from 'react'
import './App.css';

import { Board } from './components'
import { Dashboard } from './components'

import { dummyList } from './components/Board/assets/dummyList.js'

function App() {

    const [selected, setSelected] = useState(false)
    const [selectedBoard, setSelectedBoard] = useState({})

return (
<>

<div className="App">
    {
    selected
    ?
    <Board 
    board={selectedBoard}
    />
    :
    <Dashboard />
    }
</div>

</>
);
}

export default App;
