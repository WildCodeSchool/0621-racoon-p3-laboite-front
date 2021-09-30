import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import useModal from '../Modal/useModal'
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

  useEffect(() => {
    axios.get(`http://localhost:4000/pole`).then(res => setData(res.data))
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
        localStorage.setItem('user_token', res.headers['x-access-token'])
        res.headers['x-access-token'] && window.location.replace('/admin')
      })
  }

  data && console.log(data)

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
      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm}>
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
            <button className='form-btn' onClick={toggleLoginForm}>
              Annuler
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Navbar
