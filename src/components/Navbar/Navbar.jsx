import { useState, useEffect } from 'react'
import axios from 'axios'

import useModal from '../../use/useModal'
import Modal from '../Modal/Modal'
import NavbarLink from './NavbarLink'
import User from '../../assets/user-icon.png'

import './Navbar.css'

const Navbar = () => {
  const [data, setData] = useState()
  const [fixNav, setFixNav] = useState(false)
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/pole`)
      .then(res => setData(res.data))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', stickyNav)
    return () => window.removeEventListener('scroll', stickyNav)
  }, [])

  const stickyNav = () => {
    if (window.scrollY > 100) {
      setFixNav(true)
    } else {
      setFixNav(false)
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_URL_API}/login`, {
        email,
        password
      })
      .then(res => {
        console.log(res.status)
        localStorage.setItem('user_token', res.headers['x-access-token'])
        if (res.headers['x-access-token']) {
          window.location.replace('/admin')
          setIsConnected(true)
        }
      })
      .catch(err => alert(err))
  }
  console.log(isConnected)
  const logout = () => {
    setIsConnected(false)
    localStorage.removeItem('user_token')
    window.location.replace('/')
  }

  return (
    <div className={`flex navlist ${fixNav && 'flex sticky'}`}>
      <div>N</div>
      <NavbarLink navTo={'/'} NavTitle={'Le Concept'} />
      {data &&
        data.map(e => (
          <NavbarLink
            key={e.id}
            navTo={`/pole/${e.id}`}
            NavTitle={e.pole_name}
          />
        ))}
      <NavbarLink navTo={'/partenaires'} NavTitle={'Partenaires'} />
      <NavbarLink navTo={'/contact'} NavTitle={'Contact'} />
      <div>
        <img
          className='flex user-icon'
          src={User}
          alt='user'
          onClick={toggleLoginForm}
        />
      </div>
      <Modal
        isShowing={isLoginFormShowed}
        hide={toggleLoginForm}
        title={`Connexion Administrateur :`}
      >
        {isConnected ? (
          <div>
            <button className='form-btn' onClick={logout}>
              Se déconnecter
            </button>
          </div>
        ) : (
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
        )}
      </Modal>
    </div>
  )
}

export default Navbar
