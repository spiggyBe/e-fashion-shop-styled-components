import React from 'react'

export const Register = () => {
    return (
        <div style={{ flexDirection: 'column', textAlign: 'center' }}>
            <h1>Create an account</h1>
            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '50px' }}>
                <input type='text' placeholder='user name' />
                <input type='text' placeholder='e-mail' />
                <input type='text' placeholder='password' />
                <input type='text' placeholder='confirm-password' />
                <button>Register</button>
            </form>
        </div>
    )
}


