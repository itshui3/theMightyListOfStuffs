import React, { useEffect } from 'react'

import BoardInput from './BoardInput.js'
import BoardCard from './BoardCard.js'

function PageCard({pageIdx, page, nestingSeq, selectBoard}) {


return (
<>
    <div 
    className='pageCard_cont'
    >
        <h2>{page.title}</h2>
        <div
        className='pageCard_nest'
        >

        {
            page && page.pages.length > 0
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
            page && page.boards.length > 0
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
