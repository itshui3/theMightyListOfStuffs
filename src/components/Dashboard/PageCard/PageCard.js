import './PageCard.sass'
import './pageLoading.sass'

// assets
import React, { useState, useEffect } from 'react'
// components
import ExpandArrowSVG from './ExpandArrowSVG.js'

import AddItemSVG from '../Input/AddItemSVG.js'
import BoardInput from '../Input/BoardInput.js'
import PageInput from '../Input/PageInput.js'

import BoardCard from '../BoardCard/BoardCard.js'
// remote data
import { useLazyQuery } from '@apollo/client'

import { pageQueryFactory } from './_pageQueryFactory.js'

// nestSeq: [firstSelectPg, ..., thisPgId]
// first id in nestSeq is the first page selectable from rootPages. It does not refer to rootPages itself
// last id in nestSeq is the id of the page rendered
function PageCard({username, page, nestSeq, selectBoard}) {
    const PageQuery = pageQueryFactory(username)

    const [getPages, { data, loading, error }] = useLazyQuery(PageQuery)
    const [collapse, setCollapse] = useState(true)

    const handleCollapse = () => {
        setCollapse(!collapse)
        if (!data) {
            getPages({ variables: { id: nestSeq }})
        }
        
    }

    const indentation = { paddingLeft: `${(nestSeq.length-1) * 10}px` }

return (
<>
    <div 
    className='pageCard_cont'>
        <div 
        className='pageCard_header'
        style={{...indentation}}>


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
