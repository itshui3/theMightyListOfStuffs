import React, { useState, useEffect } from 'react'

import './PageCard.css'

import BoardInput from './BoardInput.js'
import PageInput from './PageInput.js'

import BoardCard from './BoardCard.js'

function PageCard({page, nestSeq, selectBoard}) {

    const [collapse, setCollapse] = useState(true)

    useEffect(() => {
        console.log('nest seq', nestSeq)
        console.log('page title', page.title)
    })

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    const indentation = {
        marginLeft: `${nestSeq.length * 7}px`
    }

    const arrowStyle = {
        width: '0.6875em',
        height: '0.6875em',
        display: 'block',
        fill: 'rgba(55, 53, 47, 0.4)',
        flexShrink: '0',
        backfaceVisibility: 'hidden',
        transition: 'transform 200ms ease-out 0s',
        transform: collapse ? 'rotateZ(90deg)' : 'rotateZ(180deg)',
        opacity: '1',

        marginLeft: '5px',
        marginRight: '5px'
    }

return (
<>
    <div 
    className='pageCard_cont'
    style={indentation}
    >
        <div 
        className='pageCard_header'
        onClick={handleCollapse}>

            <svg 
            viewBox="0 0 100 100" 
            class="triangle" 
            style={arrowStyle}>
                <polygon points="5.9,88.2 50,11.8 94.1,88.2"></polygon>
            </svg>

            <h2 className='pageCard_title'>
            {page.title}
            </h2>

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
                page={page}
                nestSeq={nestSeq.concat(idx)}
                selectBoard={selectBoard}
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
                nestSeq={nestSeq}
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
