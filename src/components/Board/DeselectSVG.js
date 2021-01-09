import React from 'react'

function DeselectSVG({ deselecting }) {
return (
<>
    <svg width="30" height="30">
        <circle 
        r="8" 
        cx="15" 
        cy="15" 
        fill={deselecting ? 'darkgrey' : 'grey'} />
    </svg>
</>
)
}

export default DeselectSVG
