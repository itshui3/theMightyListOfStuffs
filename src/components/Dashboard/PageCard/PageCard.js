// styles
import './PageCard.sass'
import './pageLoading.sass'

// react deps
import React, { useState, useReducer, useEffect } from 'react'
// remote
import { useLazyQuery } from '@apollo/client'
import { pageQuery } from './_pageQuery.js'
// components
import ExpandArrowSVG from './ExpandArrowSVG.js'

import AddItemSVG from '../Input/AddItemSVG.js'
import BoardInput from '../Input/BoardInput.js'
import PageInput from '../Input/PageInput.js'

import BoardCard from '../BoardCard/BoardCard.js'
// assets
import { hover } from './_inline'
import { hoverReducer, HOVER_ACTION } from './_hoverReducer'
import { initAddingState, IS_ADDING_ACTION, isAddingReducer } from './_isAddingReducer'

// pgId is this pg's id
function PageCard({ username, page, indent, pgId, pushPage, selectBoard }) {
    const indentation = { paddingLeft: `${(indent.length-1) * 10}px` }

    const [getPages, { data, loading, error }] = useLazyQuery(pageQuery)
    const [collapse, setCollapse] = useState(true)

    const [hoverState, dispatchHover] = useReducer(hoverReducer, { style: indentation })
    const [isAdding, dispatchIsAdding] = useReducer(isAddingReducer, initAddingState)
    // isAdding.pg: Boolean
    // isAdding.brd: Boolean
    const isAddingReducerAPI = { dispatchIsAdding, IS_ADDING_ACTION }

    const handleCollapse = () => {
        setCollapse(!collapse)
        if (!data) {
            getPages({ variables: { id: pgId }})
        }
        
    }

    const handleSavePg = (pgId) => (page) => {

        if (page && page.length > 0) {
            console.log('in PageCard.js, in handleSavePg[fn], pgId', pgId)
            pushPage(pgId.length > 0 ? pgId : '', page)
            dispatchIsAdding({ type: IS_ADDING_ACTION.NOT_ADDING_PG })
        }

    }

    const unMountOnBlur = () => {
        dispatchIsAdding({ type: IS_ADDING_ACTION.NOT_ADDING_PG })
    }

return (
<>
    <div 
    className='pageCard_cont'>
        <div 
        className='pageCard_header'
        style={hoverState.style}
        
        onMouseOver={() => dispatchHover({ 
            type: HOVER_ACTION.MOUSE_OVER, 
            payload: { ...indentation, ...hover} 
        })}

        onMouseOut={() => dispatchHover({ 
            type: HOVER_ACTION.MOUSE_OUT, 
            payload: { ...indentation } 
        })}>


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

        isAdding.pg
        ?
        <PageInput 
        handleSave={handleSavePg(pgId)}
        unMountOnBlur={unMountOnBlur}
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
            pgId={page.id}
            indent={indent+1}
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
            indent={indent+1}
            // instead of passing in pgId / username, just toss it in a thunk so fn has everything provided
            pgId={pgId}
            username={username}
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
