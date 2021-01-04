import React, { useState, useEffect } from 'react'

import './PageCard.css'

import ExpandArrowSVG from './ExpandArrowSVG.js'

import AddItemSVG from './Input/AddItemSVG.js'
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

    const indentation = { paddingLeft: `${(nestSeq.length-1) * 10}px` }

return (
<>
    <div 
    className='pageCard_cont'>
        <div 
        className='pageCard_header'
        style={indentation}>

            <ExpandArrowSVG 
            collapse={collapse} 
            handleCollapse={handleCollapse} 
            />

            <h2 className='pageCard_title'>
            {page.title}
            </h2>

            <AddItemSVG />

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
                selectBoard={() => selectBoard(nestSeq, idx)}
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
