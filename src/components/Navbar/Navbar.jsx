import { useState, useEffect } from 'react'
import axios from 'axios'

import Login from '../../screens/Login/Login'
import Modal from '../Modal/Modal'
import NavbarLink from './NavbarLink'
import useModal from '../../use/useModal'
import User from '../../assets/user-icon.png'

import './Navbar.css'

const Navbar = () => {
  const [poles, setPoles] = useState()
  const [fixNav, setFixNav] = useState(false)
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/poles`)
      .then(res => setPoles(res.data))
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

  const logout = () => {
    localStorage.removeItem('access_token')
    window.location.replace('/')
  }

  return (
    <div className={`flex navlist ${fixNav && 'flex sticky'}`}>
      <div></div>
      <NavbarLink navTo={'/'} NavTitle={'Le Concept'} />
      {poles &&
        poles.map(e => (
          <NavbarLink
            key={e.id}
            navTo={`/poles/${e.id}`}
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
        {localStorage.getItem('access_token') ? (
          <div>
            <button className='form-btn' onClick={logout}>
              Se déconnecter
            </button>
          </div>
        ) : (
          <Login toggleLoginForm={toggleLoginForm} />
        )}
      </Modal>
    </div>
  )
}

export default Navbar
