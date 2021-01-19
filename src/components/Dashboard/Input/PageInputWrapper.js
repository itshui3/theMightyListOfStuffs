import './_PageInputWrapper.css'
import React, { useState, useEffect, useRef } from 'react'
import PageInput from './PageInput'
// compos
// import PageInput from './PageInput'

function PageInputWrapper({ pushPage, nestSeq }) {

    const [addingPage, setAddingPage] = useState(false)

    const handleSavePg = (nestSeq) => (page) => {

        if (page.length > 0) {
            pushPage(nestSeq ? nestSeq[nestSeq.length-1] : null, page)
            setAddingPage(false)
        }

    }

    const unMountOnBlur = () => {
        setAddingPage(false)
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

        <PageInput
        unMountOnBlur={unMountOnBlur}
        handleSave={handleSavePg(nestSeq)}
        />
    )
}
</>
)
}

export default PageInputWrapper
