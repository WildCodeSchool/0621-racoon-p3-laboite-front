import axios from 'axios'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const loadAdmin = () => {
    localStorage.getItem('user_token')
      ? console.log('admin connected') || window.location.replace('/admin')
      : alert("Erreur d'authentification")
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:4000/login', {
        email,
        password
      })
      .then(res => {
        localStorage.setItem('user_token', res.headers['x-access-token'])
      })
    setTimeout(() => loadAdmin(), 1000)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
