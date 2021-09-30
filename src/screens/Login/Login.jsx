import axios from 'axios'
import { useState } from 'react'

const Login = props => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const onSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:4000/login', {
        email,
        password
      })
      .then(res => {
        localStorage.setItem('user_token', res.headers['x-access-token'])
      })
    props.setisLogged(!props.isLogged)
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
