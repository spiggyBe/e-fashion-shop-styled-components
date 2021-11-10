import React from 'react'

export const Login = () => {
    return (
        <div style={{ flexDirection: 'column', textAlign: 'center' }}>
            <h1>Sign In</h1>
            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '50px' }}>
                <input type='text' placeholder='user name' />

                <input type='text' placeholder='password' />

                <button>Login</button>
            </form>
        </div>
    )
}


