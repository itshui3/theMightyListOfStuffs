import './_inputs.sass'
import React, { useState, useEffect, useRef } from 'react'

import AddItemRootSVG from './AddItemRootSVG'

function PageInput({ handleSave, unMountOnBlur }) {

    const [page, setPage] = useState('')

    const [lock, setLock] = useState(false)

    const pageInputRef = useRef()

    useEffect(() => { pageInputRef.current.focus() }, [])

    const handleWrite = (ev) => { setPage(ev.target.value) }

    const handleBlur = () => {
        if(!lock) { unMountOnBlur() }
    }

    const lockUnlock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }


return (
<>

    <div 
    className='rootInput_cont'
    onMouseDown={(ev) => ev.preventDefault()}
    onBlur={handleBlur}
    onClick={lockUnlock}
    >
        <input 
        className='addingPage_input'
        onChange={handleWrite}
        value={page}
        ref={pageInputRef}
        />
        <div 
        className='rootInput_cont'
        onClick={() => handleSave(page)}>
            <AddItemRootSVG /> 
            <p className='rootInput_text'>Save Page</p>
        </div>
    </div>


</>
)
}

export default PageInput
