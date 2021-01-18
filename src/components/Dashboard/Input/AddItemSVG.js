import './_AddItemSVG.css'
import React, { useState } from 'react'

import CrudBox from './CrudBox.js'

function AddItemSVG({ collapse, handleCollapse }) {

    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)

    const deactivate = () => {
        setActive(false)
    }

    const arrowStyle = {

        width: '0.4875em',
        height: '0.4875em',
        display: 'block',

        flexShrink: '0',
        backfaceVisibility: 'hidden',
        transition: 'transform 200ms ease-out 0s',
        transform: active ? 'rotateZ(270deg)' : 'rotateZ(180deg)',
        opacity: '1',

        marginRight: '5px',
        marginLeft: '5px'
    }
return (
<>

{
    active
    ?
    <CrudBox deactivate={deactivate} collapse={collapse} handleCollapse={handleCollapse} />
    :
    null
}

<div
className='addItemSVG_cont'
onMouseEnter={() => setHover(true)}
onMouseLeave={() => setHover(false)}
onClick={() => setActive(!active)}>

    <svg 
    className="octicon octicon-plus" 
    viewBox="0 0 16 16" 
    version="1.1" 
    width=".7em" 
    height=".7em" 

    fill={ hover || active ? 'lightgrey' : 'grey' }
    aria-hidden="true">

        <path fillRule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>

    </svg>

    <svg 
    viewBox="0 0 100 100" 
    className="triangle" 
    style={arrowStyle}
    fill={ hover ? 'black' : 'grey' }>

        <polygon points="5.9,88.2 50,11.8 94.1,88.2"></polygon>

    </svg>

</div>

</>
)
}

export default AddItemSVG
