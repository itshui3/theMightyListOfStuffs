// styles
import './PageCard.sass'
import './pageLoading.sass'

// react deps
import React, { useState, useReducer, useEffect } from 'react'
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
import { initAddingState, IS_ADDING_ACTION, isAddingReducer } from './_isAddingReducer'

// IS_ADDING_ACTION api: 
// IS_ADDING_ACTION.ADDING_PG
// IS_ADDING_ACTION.NOT_ADDING_PG

// IS_ADDING_ACTION.ADDING_BRD
// IS_ADDING_ACTION.NOT_ADDING_BRD

// nestSeq: [firstSelectPg, ..., thisPgId]
function PageCard({username, page, nestSeq, pushPage, selectBoard}) {
    const indentation = { paddingLeft: `${(nestSeq.length-1) * 10}px` }

    const PageQuery = pageQueryFactory(username)

    const [getPages, { data, loading, error }] = useLazyQuery(PageQuery)
    const [collapse, setCollapse] = useState(true)

    const [hoverStyle, setHoverStyle] = useState(indentation)
    const [isAdding, dispatchIsAdding] = useReducer(isAddingReducer, initAddingState)
    // isAdding.pg: Boolean
    // isAdding.brd: Boolean
    const isAddingReducerAPI = { dispatchIsAdding, IS_ADDING_ACTION }

    useEffect(() => {
        console.log('in PageCard.js: pushPage', pushPage)
    }, [])

    const handleCollapse = () => {
        setCollapse(!collapse)
        if (!data) {
            getPages({ variables: { id: nestSeq }})
        }
        
    }

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

            <AddItemSVG 
            collapse={collapse}
            handleCollapse={handleCollapse}
            isAddingReducerAPI={isAddingReducerAPI}
            />

        </div>
        
        <div
        className='pageCard_nest'
        >
        {
            // [0] - 1st poma
            // something ? render(pgInput) : null
            isAdding.pg
            ?
            <PageInput 
            pushPage={pushPage}
            nestSeq={nestSeq}
            />
            :
            null
        }
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
