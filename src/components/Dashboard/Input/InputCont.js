import React, { useState } from 'react'

import BoardInput from './BoardInput.js'
import PageInput from './PageInput.js'

import './Inputs.css'

function InputCont({ deactivate }) {

    const [lock, setLock] = useState(false)

    const lockRelock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }

    const handleBlur = () => {
        if (!lock) {
            deactivate()
        }
    }

return (
<>
    <div 
    className='PageBoard_inputcontainer'
    
    onMouseDown={(ev) => ev.preventDefault()}
    onBlur={handleBlur}
    onClick={lockRelock}
    >

    </div>
</>
)
}

export default InputCont
