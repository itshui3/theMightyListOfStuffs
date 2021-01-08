// assets
import React, { useState, useEffect } from 'react'
// components
import ExpandArrowSVG from '../ExpandArrowSVG.js'

import AddItemSVG from '../Input/AddItemSVG.js'
import BoardInput from '../Input/BoardInput.js'
import PageInput from '../Input/PageInput.js'

import BoardCard from '../BoardCard.js'
// remote data
import { useLazyQuery, gql } from '@apollo/client'

import './PageCard.css'
import './pageLoading.css'

// whenever there's pages { id, title }
// I could use the below fragment instead to expand a specific page

// page(id: 1) {

//     pages {
//         id,
//         title
//     }

// }

const pageQueryFactory = (username) => (gql`query Page($id: [Int]) {
    user(name: ${username}) {
        id,
        name,
        page(id: $id) {

            pages {
                id,
                title
            },

            boards {
                title,
                tasks
            }

        }
    }
}`)

function PageCard({username, page, nestSeq, selectBoard}) {
    const PageQuery = gql`query Page($id: [Int]) {
        user(name: "Hui") {
            id,
            name,
            page(id: $id) {
    
                pages {
                    id,
                    title
                },
    
            }
        }
    }`

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
        style={indentation}>

            {
            loading
            ?
            <div className="lds-ripple"><div></div><div></div></div>
            :
            <ExpandArrowSVG
            collapse={collapse}
            handleCollapse={handleCollapse}
            />
            }

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
            key={idx}
            page={page}
            nestSeq={nestSeq.concat(page.id)}
            selectBoard={selectBoard}
            />))
        :
        null
        }

        {/* {
            page && page.boards.length > 0 && !collapse
            ?
            page.boards.map((board, idx) => (
                <BoardCard 
                key={idx} 
                boardTitle={board.title}
                selectBoard={selectBoard(nestSeq)}
                />))
            :
            null
        } */}

        </div>
    </div>
</>
)
}

export default PageCard
