import React, { useState } from 'react'

// import { gql, useLazyQuery } from '@apollo/client'

function Login({ switchAuth, getUser }) {

    const [username, setUsername] = useState('')

    const handleLogin = () => {
        if (username.length > 0) {
            getUser({ variables: { username: username } })
        }
    }

return (
<>
    <input 
    placeholder='username'
    value={username}
    onChange={(ev) => setUsername(ev.target.value)}
    className='login_input'
    />
    <div 
    className='login_btn'
    onClick={handleLogin}>Login</div>

    <div className='auth_footer'>
        <span>Not registered? </span>
        <span onClick={switchAuth}>Create an account</span>
    </div>
</>
)
}

export default Login