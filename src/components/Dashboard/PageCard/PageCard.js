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

const HealthPagesQuery = gql`query {
    user(name: "Hui") {
        id,
        name,
        page(id: 1) {

            pages {
                id,
                title
            }

        }
    }
}
`

// whenever there's pages { id, title }
// I could use the below fragment instead to expand a specific page

// page(id: 1) {

//     pages {
//         id,
//         title
//     }

// }

function PageCard({page, nestSeq, selectBoard}) {

    const [getHealthPages, { data, loading, error }] = useLazyQuery(HealthPagesQuery)

    useEffect(() => {
        console.log('PageCard', data, loading, error)
    }, [data, loading, error])

    const [collapse, setCollapse] = useState(true)

    const handleCollapse = () => {
        setCollapse(!collapse)
        getHealthPages()
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
            !collapse && !loading && data && data.user.page.pages.length > 0
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
                selectBoard={() => selectBoard(nestSeq, idx)}
                nestSeq={nestSeq}
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
