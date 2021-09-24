import axios from 'axios'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [token, setToken] = useState(null)

  const onSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      header: { 'Content-Type': 'application/json' }
    })
      .then(res => console.log('pouet', res) || res.json())
      .then(json => console.log(json))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='text'
          name='password'
          onChange={e => setPassword(e.target.value)}
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default Login
