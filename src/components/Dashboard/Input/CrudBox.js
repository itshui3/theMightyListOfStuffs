// styling
import './_CrudBox.css'
// inline assets
import { hover, rightBorder, hoverPg, hoverBrd } from './_inline'
// react deps
import React, { useState, useEffect, useRef, useReducer } from 'react'
// compos
import BoardInput from './BoardInput.js'
import PageInput from './PageInput.js'

function CrudBox({ deactivate }) {

    const [lock, setLock] = useState(false)
    const [hoverStyle, setHoverStyle] = useState(null)
    
    // do this next lol 1.18.21
    // const [hoverState, hoverDispatch] = useReducer()

    // might not be the forced focus

    // const refTest = useRef()
    // useEffect(() => {
    //     refTest.current.focus()
    // }, [])

    const lockRelock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }

    const handleComponentBlur = () => {
        if (!lock) { deactivate() }
    }

    const handleMouseOver = (ev) => {
        setHoverStyle(hover)
        ev.stopPropagation()

    }

    const handleMouseOut = (ev) => {
        setHoverStyle(null)
        ev.stopPropagation()
    }

return (
<>

<div className='crudBox_cont' style={hoverStyle}
onMouseDown={(ev) => ev.preventDefault()}
onClick={lockRelock}
onBlur={handleComponentBlur}

onMouseOver={handleMouseOver}
onMouseOut={handleMouseOut}
>

    <div className='input_option' style={rightBorder}>
    <h4 className='inputOption_icon'>Pg</h4>
    </div>
    
    <div className='input_option'>
    <h4 className='inputOption_icon'>Brd</h4>
    </div>

</div>

</>
)
}

export default CrudBox
