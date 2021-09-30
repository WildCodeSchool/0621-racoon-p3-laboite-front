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

  useEffect(() => {
    axios.get(`http://localhost:4000/pole`).then(res => setData(res.data))
  }, [])

  const stickyNav = () => {
    if (window.scrollY > 100) {
      setFixNav(true)
    } else {
      setFixNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', stickyNav)
    return () => window.removeEventListener('scroll', stickyNav)
  }, [])

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
        <form>
          <div className='form-group'>
            <input type='text' placeholder='Email' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='Password' />
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
