import React from 'react'

import BoardInput from './BoardInput.js'

function PageCard({pageIdx, page, nestingSeq}) {

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
                boardIdx={idx}
                boardTitle={board.title}
                selectBoard={selectBoard}
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
