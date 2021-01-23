// styles
import './PageCard.sass'
import './pageLoading.sass'

// react deps
import React, { useState, useReducer, useEffect } from 'react'
// remote
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'
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
// queries
import { addPageMutationFactory } from '../_addPageMutation'

// pgId is this pg's id
function PageCard({ username, page, indent, pgId, selectBoard }) {
    const indentation = { paddingLeft: `${indent * 10}px` }

    const { data } = useQuery( pageQuery(pgId) )
    const [addPage, addPageResp] = useMutation( addPageMutationFactory(username) )


    const [pageList, setPageList] = useState([])
    const [boardList, setBoardList] = useState([])

    useEffect(() => {
        // boot up pages/boards on mount
        if (data && !addPageResp.called) { 
            setPageList(data.page.pages)
            setBoardList(data.page.boards)
        } 

        // update pages/boards on mutate
        if (addPageResp.called && addPageResp.data) {
            setPageList(addPageResp.data.addPage.pages)
            setBoardList(addPageResp.data.addPage.boards)
        }

    }, [data, addPageResp])


    // ui controllers
    const [collapse, setCollapse] = useState(true)
    const [hoverState, dispatchHover] = useReducer(hoverReducer, { style: indentation })
    const [isAdding, dispatchIsAdding] = useReducer(isAddingReducer, initAddingState)
    // isAdding.pg: Boolean
    // isAdding.brd: Boolean
    const isAddingReducerAPI = { dispatchIsAdding, IS_ADDING_ACTION }

    const handleCollapse = () => { setCollapse(!collapse) }

    const handleSavePg = (pgId) => (page) => {

        if (page && page.length > 0) {

            addPage({ 

                variables: { 
                    username: username,
                    title: page,
                    rootID: pgId
                } 
            
            })

            dispatchIsAdding({ type: IS_ADDING_ACTION.NOT_ADDING_PG })
        }

    }

    const handleSaveBrd = (pdId) => (board) => {
        if (board && board.length > 0) {

            

            dispatchIsAdding({ type: IS_ADDING_ACTION.NOT_ADDING_BRD })
        }
    }

    const unMountPgInputOnBlur = () => { dispatchIsAdding({ type: IS_ADDING_ACTION.NOT_ADDING_PG }) }

    const unMountBrdInputOnBlur = () => { dispatchIsAdding({ type: IS_ADDING_ACTION.NOT_ADDING_BRD }) }

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

        {/* page input render */}
        {isAdding.pg
        ?
        <PageInput 
        handleSave={handleSavePg(pgId)}
        unMountOnBlur={unMountPgInputOnBlur}
        />
        :
        null}

        {/* board input render */}
        {isAdding.board
        ?
        <BoardInput
        handleSave={}
        unMountOnBlur={unMountBrdInputOnBlur}
        />
        :
        null}

        {/* page list render */}
        {!collapse && pageList
        ?
        pageList.map((page, idx) => (
            <PageCard 
            username={username}
            key={idx}
            page={page}
            pgId={page.id}
            indent={indent+1}
            selectBoard={selectBoard}
            />))
        :
        null}

        {/* board list render */}
        {!collapse && boardList
        ?
        boardList.map((board, idx) => (
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
        null}

        </div>
    </div>
</>
)
}

export default PageCard
