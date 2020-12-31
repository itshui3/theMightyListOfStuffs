import React, { useState, useEffect } from 'react'

import './PageCard.css'

import BoardInput from './BoardInput.js'
import BoardCard from './BoardCard.js'

function PageCard({pageIdx, page, nestingSeq, selectBoard}) {

    const [collapse, setCollapse] = useState(true)

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

return (
<>
    <div 
    className='pageCard_cont'
    >
        <div 
        className='pageCard_header'
        onClick={handleCollapse}>
            <h2>{page.title}</h2>
        </div>
        
        <div
        className='pageCard_nest'
        >

        {
            page && page.pages.length > 0 && !collapse
            ?
            page.pages.map((page, idx) => (
                <PageCard 
                key={idx}
                pageIdx={idx}
                page={page}
                nestingSeq={[]}
                />))
            :
            null
        }

        {
            page && page.boards.length > 0 && !collapse
            ?
            page.boards.map((board, idx) => (
                <BoardCard 
                key={idx} 
                boardTitle={board.title}
                selectBoard={() => selectBoard(board.idx)}
                />))
            :
            null
        }

        </div>
    </div>
</>
)
}

export default PageCard
