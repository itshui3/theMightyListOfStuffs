// styles
import './PageCard.sass'
import './pageLoading.sass'

// react deps
import React, { useState, useEffect } from 'react'
// remote
import { useLazyQuery } from '@apollo/client'
import { pageQueryFactory } from './_pageQueryFactory.js'
// components
import ExpandArrowSVG from './ExpandArrowSVG.js'

import AddItemSVG from '../Input/AddItemSVG.js'
import BoardInput from '../Input/BoardInput.js'
import PageInput from '../Input/PageInput.js'

import BoardCard from '../BoardCard/BoardCard.js'
// assets
import { hover } from './_inline'

// nestSeq: [firstSelectPg, ..., thisPgId]
// first id in nestSeq is the first page selectable from rootPages. It does not refer to rootPages itself
// last id in nestSeq is the id of the page rendered
function PageCard({username, page, nestSeq, selectBoard}) {
    const indentation = { paddingLeft: `${(nestSeq.length-1) * 10}px` }

    const PageQuery = pageQueryFactory(username)

    const [getPages, { data, loading, error }] = useLazyQuery(PageQuery)
    const [collapse, setCollapse] = useState(true)

    const [hoverStyle, setHoverStyle] = useState(indentation)

    useEffect(() => {
        console.log('useEffect: hoverstyle:', hoverStyle)
    }, [hoverStyle])

    const handleCollapse = () => {
        setCollapse(!collapse)
        if (!data) {
            getPages({ variables: { id: nestSeq }})
        }
        
    }

// .pageCard_header:hover
//     opacity: .8
//     background-color: lightgrey
    const handleMouseOver = () => {
        setHoverStyle({
            ...indentation, ...hover
        })
    }

    const handleMouseOut = () => {
        setHoverStyle({
            ...indentation
        })
    }

return (
<>
    <div 
    className='pageCard_cont'>
        <div 
        className='pageCard_header'
        style={hoverStyle}
        
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>


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
        !collapse && data
        ?
        data.user.page.pages.map((page, idx) => (
            <PageCard 
            username={username}
            key={idx}
            page={page}
            nestSeq={nestSeq.concat(page.id)}
            selectBoard={selectBoard}
            />))
        :
        null
        }

        {
            !collapse && data
            ?
            data.user.page.boards.map((board, idx) => (
                <BoardCard 
                key={idx} 
                board={board}
                nestSeq={[]}
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
