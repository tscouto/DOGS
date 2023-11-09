import React from 'react'

const TokenPost = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassoword] = React.useState('')
    const [token, setToken] = React.useState('')

    function handlesubmit(event) {
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((resposnse)=> {
            console.log(resposnse)
            return resposnse.json()
        }).then((json)=> {
            console.log(json)
            setToken(json.token)
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
                value={password}
                onChange={({ target }) => setPassoword(target.value)}
                placeholder='password' />

                <button>Enviar</button>
                <p style={{wordBreak: 'break-all'}}>{token}</p>
        </form>
    )
}

export default TokenPost
