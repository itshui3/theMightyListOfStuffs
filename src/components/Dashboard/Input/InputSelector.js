import './_InputSelector.css'
import React, { useState } from 'react'

import BoardInput from './BoardInput.js'
import PageInput from './PageInput.js'

function InputSelector({ deactivate }) {

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
    className='inputSelector_cont'
    
    onMouseDown={(ev) => ev.preventDefault()}
    onBlur={handleBlur}
    onClick={lockRelock}
    >

    </div>
</>
)
}

export default InputSelector
