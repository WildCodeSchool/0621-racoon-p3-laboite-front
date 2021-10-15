import axios from 'axios'
import { useState } from 'react'

const Login = ({ toggleLoginForm }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  // const loadAdmin = () => {
  //   localStorage.getItem('acces_token')
  //     ? console.log('admin connected') || window.location.replace('/admin')
  //     : alert("Erreur d'authentification")
  // }

  const onSubmit = e => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_URL_API}/login`, {
        email,
        password
      })
      .then(res => {
        console.log('res', res)
        if (res.data.auth) {
          localStorage.setItem(
            'acces_token',
            'Bearer ' + res.headers['x-access-token']
          )
          console.log('coucou', res.data.accessToken)
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${res.data.accessToken}`
        }
      })
      .catch(err => alert(err))
    setTimeout(() => checkAuth(), 1000)
  }

  const checkAuth = async () => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/login/isUserAuth`)
      .then(res => {
        console.log('res auth:', res)
        if (res.data.auth) {
          console.log('admin connected')
          window.location.replace('/admin')
        }
      })
      .catch(error => {
        console.log('error auth:', error.response)
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <input type='submit' value='Login' />
        <button
          className='form-btn'
          onClick={e => {
            e.stopPropagation()
            toggleLoginForm()
          }}
        >
          Annuler
        </button>
      </div>
    </form>
  )
}

export default Login
