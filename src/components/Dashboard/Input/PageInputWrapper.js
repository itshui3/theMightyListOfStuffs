import './_PageInputWrapper.css'
import React, { useState } from 'react'
import PageInput from './PageInput'

function PageInputWrapper({ pushPage, pgId }) {

    const [addingPage, setAddingPage] = useState(false)

    const handleSavePg = (pgId) => (page) => {

        if (page.length > 0) {
            pushPage(pgId, page)
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
            onClick={() => { setAddingPage(true) } }>+ Add Page</p>
        </div>
    )
    :
    (

        <PageInput
        unMountOnBlur={ unMountOnBlur }
        handleSave={ handleSavePg(pgId) }
        />
    )
}
</>
)
}

export default PageInputWrapper
