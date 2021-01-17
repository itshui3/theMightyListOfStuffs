import React, { useState, useEffect, useRef } from 'react'

function PageInput({ pushPage, pushBoard, nestSeq }) {

    const [page, setPage] = useState('')
    const [addingPage, setAddingPage] = useState(false)
    const [lock, setLock] = useState(false)

    const pageInputRef = useRef()

    useEffect(() => {
        if(addingPage) {
            setLock(false)
            setTimeout(() => {
                pageInputRef.current.focus()
            }, .0001)
        }
    }, [addingPage])

    const handleWrite = (ev) => {
        setPage(ev.target.value)
    }

    const handleBlur = () => {
        if(!lock) {
            setAddingPage(false)
        }
    }

    const lockUnlock = () => {
        setLock(true)
        setTimeout(() => {
            setLock(false)
        }, .0001)
    }

    const handleSave = () => {
        
        if (page.length > 0) {
            pushPage(nestSeq[nestSeq.length-1], page)
            setAddingPage(false)
        }

    }

return (
<>
{
    !addingPage
    ?
    (
        <div className='pageInput_notAddingPage'>
            <p 
            className='notAddingPage_btn'
            onClick={() => {setAddingPage(true)}}>+ Add Page</p>
        </div>
    )
    :
    (
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
            onClick={handleSave}>+ Save Page</div>
        </div>
    )
}
</>
)
}

export default PageInput
