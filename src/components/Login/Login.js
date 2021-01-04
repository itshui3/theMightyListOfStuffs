import React from 'react'

import './Login.css'

function Login({ setUser }) {

    const [username, setUsername] = useState('')

    const center = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

return (
<>
    <div style={center} className='login_cont'>
        <input 
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        className='login_input'
        />
        <div 
        className='login_btn'
        onClick={() => {
            if (username.length) setUser(username)
        }}>Select User</div>
    </div>
</>
)
}

export default Login
