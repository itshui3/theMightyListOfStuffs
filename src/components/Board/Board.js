import React from 'react'
import './Board.css'

import { useState } from 'react'

function Board() {

    const [boardTitle, setBoardTitle] = useState(null)
    
    return (
        <>
        <div className='board_wrapper'>
            <div className='board_header'>
                <h1 className='board_title header_items'>
                    {
                    boardTitle ? boardTitle : 'Placeholder'
                    }
                </h1>
            </div>
                
        </div>
        </>
    )
}

export default Board;