import './_PageInputWrapper.css'
import './_rootInputs.sass'
import React, { useState } from 'react'

// compos
import AddItemRootSVG from './AddItemRootSVG'
import PageInput from './PageInput'

const hoverCont = { backgroundColor: 'rgba(0, 0, 0, .3)' }

function PageInputWrapper({ pushPage, pgId }) {

    const [addingPage, setAddingPage] = useState(false)

    const [hover, setHover] = useState(false)

    const handleSavePg = (pgId) => (page) => {

        if (page.length > 0) {
            pushPage(pgId, page)
            setAddingPage(false)
        }

    }

    const unMountOnBlur = () => {
        setAddingPage(false)
    }

    const handleHover = (isHover) => { setHover(isHover) }

return (
<>
{

!addingPage

?

(<div className='pageInput_notAddingPage rootInput_cont'
onClick={() => { setAddingPage(true) } }
style={hover ? hoverCont : null}

onMouseOver={() => handleHover(true)}
onMouseOut={() => handleHover(false)}>

    <AddItemRootSVG />
    <p className='rootInput_text'>Add Page</p>
    
</div>)

:

(<PageInput
unMountOnBlur={ unMountOnBlur }
handleSave={ handleSavePg(pgId) }
/>)

}
</>
)
}

export default PageInputWrapper
