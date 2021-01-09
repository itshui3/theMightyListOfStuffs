import React from 'react'

function DeselectSVG({ deselecting }) {
return (
<>
    <svg width="30" height="30">
        <circle 
        r="15" 
        cx="15" 
        cy="15" 
        fill={deselecting ? 'white' : 'black'} />

        <circle 
        r="10" 
        cx="15" 
        cy="15" 
        fill="none"
        stroke={deselecting ? 'black' : 'white'}
        strokeWidth="3.5" />
    </svg>
</>
)
}

export default DeselectSVG
