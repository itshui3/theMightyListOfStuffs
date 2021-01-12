import React, { useState } from 'react'

import Login from './Login/Login.js'
import Register from './Register/Register.js'

import './Login.css'

function Auth({ authAPI }) {

    const [auth, setAuth] = useState('log')

    const switchAuth = () => {
        setAuth(auth => {

            if (auth === 'log') {
                return 'reg'
            } else {
                return 'log'
            }

        })
    }

    const center = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

return (
<>
    <div style={center} className='login_cont'>

        {
        auth === 'log'
        ?
        <Login switchAuth={switchAuth} getUser={authAPI.getUser} />
        :
        auth === 'reg'
        ?
        <Register switchAuth={switchAuth} addUser={authAPI.addUser} />
        :
        null
        }

    </div>
</>
)
}

export default Auth
