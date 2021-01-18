import './_CrudBox.css'
import React, { useState, useEffect, useRef } from 'react'

import BoardInput from './BoardInput.js'
import PageInput from './PageInput.js'

function CrudBox({ deactivate }) {

    const [lock, setLock] = useState(false)

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

return (
<>

<div className='crudBox_cont'
onMouseDown={(ev) => ev.preventDefault()}
onClick={lockRelock}
onBlur={handleComponentBlur}
>

    <div className='input_option'>
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
