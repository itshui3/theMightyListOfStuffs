import React from 'react'

function ExpandArrowSVG({ collapse, handleCollapse }) {

    const arrowStyle = {
        width: '0.6875em',
        height: '0.6875em',
        display: 'block',
        fill: 'rgba(55, 53, 47, 0.4)',
        flexShrink: '0',
        backfaceVisibility: 'hidden',
        transition: 'transform 200ms ease-out 0s',
        transform: collapse ? 'rotateZ(90deg)' : 'rotateZ(180deg)',
        opacity: '1',

        marginRight: '5px',
        marginLeft: '5px'
    }

return (
<>
<div 
className='arrowSvg_cont'
onClick={handleCollapse}>
    <svg 
    viewBox="0 0 100 100" 
    className='page_arrowSvg triangle'
    style={arrowStyle}>
        <polygon points="5.9,88.2 50,11.8 94.1,88.2"></polygon>
    </svg>

</div>
</>
)
}

export default ExpandArrowSVG
