import React from 'react'

const UserPost = () => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassoword] = React.useState('')

    function handlesubmit(event) {
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        }).then((resposnse)=> {
            console.log(resposnse)
            return resposnse.json()
        }).then((json)=> {
            console.log(json)
            return json
        })
        
    }

    return (
        <form onSubmit={handlesubmit}>
            <input
                type="text"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                placeholder='username' />
            <input
                type="text"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                placeholder='email' />
            <input
                type="text"
                value={password}
                onChange={({ target }) => setPassoword(target.value)}
                placeholder='password' />

                <button>Enviar</button>
        </form>
    )
}

export default UserPost
