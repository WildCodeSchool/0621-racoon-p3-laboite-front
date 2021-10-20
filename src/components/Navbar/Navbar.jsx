import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { Context } from '../../context/Context'

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

  const { access_token, dispatch } = useContext(Context)

  let history = useHistory()

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

  const handleLogout = () => {
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: 'LOGOUT' })
    {
      history.push('/')
    }
  }

  const handleAdminPage = () => {
    {
      history.push('/admin')
    }
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
        {access_token ? (
          <div className='form-logout'>
            <button
              className='form-btn'
              onClick={() => {
                handleAdminPage()
                toggleLoginForm()
              }}
            >
              Espace administrateur
            </button>
            <button className='form-btn btn-logout' onClick={handleLogout}>
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
