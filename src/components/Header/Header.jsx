import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import Logo from '../../assets/logo-bac-blanc-no-bg.png'
import User from '../../assets/user-icon.png'

import './Header.css'

const Header = () => {
  const [data, setData] = useState()

  useEffect(async () => {
    const result = await axios.get(`http://localhost:4000/pole`)
    setData(result.data)
  }, [])

  data && console.log(data)
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
                <NavLink to={`/pole/${e.id}`}>{e.pole_name}</NavLink>
              </p>
            </div>
          ))}
        <div>
          <NavLink className='user-icon' to={'/login'}>
            <img src={User} alt='user' />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
