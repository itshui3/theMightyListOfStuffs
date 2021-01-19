import './_PageInput.css'
import React, { useState, useEffect, useRef } from 'react'

function PageInput({ handleSave, unMountOnBlur }) {

    const [page, setPage] = useState('')
    // const [addingPage, setAddingPage] = useState(false)
    // i need a state action that sets addingPageFalse

    const [lock, setLock] = useState(false)

    const pageInputRef = useRef()

    useEffect(() => {
// do I need this as a setTimeout? 

        pageInputRef.current.focus()

    }, [])

    const handleWrite = (ev) => {
        setPage(ev.target.value)
    }

    const handleBlur = () => {
        if(!lock) {
            // setAddingPage(false)
            // use state action here
            unMountOnBlur()
        }
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
    className='pageInput_addingPage'
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
        className='addingPage_saveBtn'
        onClick={() => handleSave(page)}>+ Save Page</div>
    </div>


</>
)
}

export default PageInput
