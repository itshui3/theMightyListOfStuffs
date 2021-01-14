import React, { useState } from 'react'

function Register({ switchAuth, addUser }) {

    const [username, setUsername] = useState('')

    const handleRegister = () => {
        if (username.length > 0) {
            addUser({ variables: { username: username } })
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
    onClick={handleRegister}>Register</div>

    <div className='auth_footer'>
        <span>Have an account? </span>
        <span onClick={switchAuth}>Login</span>
    </div>
</>
)
}

export default Register
