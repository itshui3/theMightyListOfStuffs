import React from 'react'
import './Board.css'

import { useState } from 'react'

import { dummyList } from './assets/dummyList.js'

function Board() {

    const [boardTitle, setBoardTitle] = useState(null)
    const [list, setList] = useState(() => {
        return dummyList
    })

    return (
        <>
        <div className='board_wrapper'>

            <div className='board_header'>
                <h1 className='board_title header_items'>
                    {
                    boardTitle 
                        ? boardTitle 
                        : 'Placeholder'
                    }
                </h1>
            </div>

            <div className='board_body'>

            </div>
                
        </div>
        </>
    )
}

export default Board;