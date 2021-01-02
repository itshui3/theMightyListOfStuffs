import React, { useState, useEffect } from 'react'

import './PageCard.css'

import BoardInput from './Input/BoardInput.js'
import PageInput from './Input/PageInput.js'

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
        paddingLeft: `${(nestSeq.length-1) * 10}px`
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

        marginRight: '5px',
        marginLeft: '5px'
    }

return (
<>
    <div 
    className='pageCard_cont'
    >
        <div 
        className='pageCard_header'
        style={indentation}>
            <div 
            className='arrowSvg_cont'
            onClick={handleCollapse}>
                <svg 
                viewBox="0 0 100 100" 
                class="triangle" 
                className='page_arrowSvg'
                style={arrowStyle}>
                    <polygon points="5.9,88.2 50,11.8 94.1,88.2"></polygon>
                </svg>
            </div>


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
