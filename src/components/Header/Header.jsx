import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import Pole from '../../screens/Pole/Pole.jsx'
import Concept from '../../screens/Concept/Concept.jsx'
import Logo from '../../assets/logo-bac-blanc-no-bg.png'
import User from '../../assets/user-icon.png'

import './Header.css'

const Header = () => {
  const [data, setData] = useState()

  useEffect(async () => {
    const result = await axios(
      `http://localhost:4000/pole
    `
    )
    setData(result.data)
  }, [])

  return (
    <div className='flex header'>
      <div className='flex logo-container'>
        <div className='header-logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='header-text'>
          <h1>La boîte d&apos;à côté...</h1>
          <h1 style={{ paddingLeft: '150px' }}>
            Une entreprise pas comme les autres !
          </h1>
        </div>
      </div>

      <div className='flex navlist'>
        <div>
          <p style={{ color: '#EB5160' }}>N</p>
        </div>
        <div>
          <p>
            <NavLink to='/concept'>Le Concept</NavLink>
          </p>
        </div>
        {data &&
          data.map(e => (
            <div key={e.id}>
              <p>
                <NavLink to={`/pole/${e.id}`}>
                  {e.pole_title.replace('Le', '').replace('La', '')}
                </NavLink>
              </p>
            </div>
          ))}
        <div>
          <img className='user-icon' src={User} alt='user' />
        </div>
      </div>
    </div>
  )
}

export default Header
