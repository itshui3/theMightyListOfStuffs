// import './_PageInput.css'
// import React, { useState, useEffect, useRef } from 'react'

// function PageInput({ pushPage, nestSeq, pageInputRef }) {

//     const [page, setPage] = useState('')
//     // const [addingPage, setAddingPage] = useState(false)
//     // i need a state action that sets addingPageFalse

//     const [lock, setLock] = useState(false)

//     useEffect(() => {
//         if(addingPage) {
//             setLock(false)
//             setTimeout(() => {
//                 pageInputRef.current.focus()
//             }, .0001)
//         }
//     }, [addingPage])

//     const handleWrite = (ev) => {
//         setPage(ev.target.value)
//     }

//     const handleBlur = () => {
//         if(!lock) {
//             // setAddingPage(false)
//             // use state action here
//         }
//     }

//     const lockUnlock = () => {
//         setLock(true)
//         setTimeout(() => {
//             setLock(false)
//         }, .0001)
//     }

//     const handleSave = () => {

//         if (page.length > 0) {
//             pushPage(nestSeq ? nestSeq[nestSeq.length-1] : null, page)
//             setAddingPage(false)
//         }

//     }

// return (
// <>

//     <div 
//     className='pageInput_addingPage'
//     onMouseDown={(ev) => ev.preventDefault()}
//     onBlur={handleBlur}
//     onClick={lockUnlock}
//     >
//         <input 
//         className='addingPage_input'
//         onChange={handleWrite}
//         value={page}
//         ref={pageInputRef}
//         />
//         <div 
//         className='addingPage_saveBtn'
//         onClick={handleSave}>+ Save Page</div>
//     </div>


// </>
// )
// }

// export default PageInput
