import React, { useState, useEffect } from 'react'

function Loading() {

    const [ellipses, setEllipses] = useState('.')

    useEffect(() => {

        const ellipsesEffect = setInterval(() => {

            setEllipses(e => {
                return e.length > 2 ? '.' : e + '.'
            })

        }, 400)

        return () => clearInterval(ellipsesEffect)

    }, [])

    const center = {
        position: 'absolute',
        top: '50%',
        left: '50%',

        transform: 'translate(-50%, -50%)'
    }
return (
<>
<div style={center}>
    <h2>Loading{ellipses}</h2>
</div>
</>
)
}

export default Loading
