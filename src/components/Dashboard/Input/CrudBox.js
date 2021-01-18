// styling
import './_CrudBox.css'
// inline assets
import { hover, rightBorder, hoverPg, hoverBrd } from './_inline'
// react deps
import React, { useState, useEffect, useRef, useReducer } from 'react'
// compos
import BoardInput from './BoardInput.js'
import PageInput from './PageInput.js'
// reducer
import { HOVERACTION, useHoverStyle, initialHover } from './_useHoverStyle'
// HOVERACTION api: 
// OVER_CONT: 'over_cont',
// OVER_PAGE: 'over_page',
// OVER_BOARD: 'over_board',

// OUT_CONT: 'out_cont',
// OUT_PAGE: 'out_page',
// OUT_BOARD: 'out_board'

function CrudBox({ deactivate }) {

    const [lock, setLock] = useState(false)
    // const [hoverStyle, setHoverStyle] = useState(null)

    // do this next lol 1.18.21
    const [hoverStyle, hoverDispatch] = useReducer(useHoverStyle, initialHover)

    const lockRelock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }

    const handleComponentBlur = () => {
        if (!lock) { deactivate() }
    }

    const handleHoverEvent = (actionType) => {
        hoverDispatch({ type: actionType })
    }

return (
<>

<div className='crudBox_cont' style={hoverStyle.cont}
onMouseDown={(ev) => ev.preventDefault()}
onClick={lockRelock}
onBlur={handleComponentBlur}

onMouseOver={(ev) => {
    ev.stopPropagation()
    handleHoverEvent(HOVERACTION.OVER_CONT)
}}
onMouseOut={(ev) => {
    ev.stopPropagation()
    handleHoverEvent(HOVERACTION.OUT_CONT)
}}
>

    <div className='input_option' style={{...rightBorder, ...hoverStyle.page}}
    onMouseOver={(ev) => { handleHoverEvent(HOVERACTION.OVER_PAGE) }}
    onMouseOut={(ev) => { handleHoverEvent(HOVERACTION.OUT_PAGE) }}>
    <h4 className='inputOption_icon'>Pg</h4>
    </div>
    
    <div className='input_option' style={hoverStyle.board}
    onMouseOver={(ev) => { handleHoverEvent(HOVERACTION.OVER_BOARD) }}
    onMouseOut={(ev) => { handleHoverEvent(HOVERACTION.OUT_BOARD) }}>
    <h4 className='inputOption_icon'>Brd</h4>
    </div>

</div>

</>
)
}

export default CrudBox
