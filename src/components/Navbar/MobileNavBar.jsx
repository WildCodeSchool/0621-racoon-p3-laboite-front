import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import './MobileNavBar.css'

const MobileNavBar = () => {
  //Appel API et states pour afficher les pôles
  const [data, setData] = useState()
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/poles`)
      .then(res => setData(res.data))
  }, [])

  //State et fonction pour définir si le menu est ouvert ou non
  const [isOpen, setIsOpen] = useState()
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='mobile-navbar'>
      {isOpen && (
        <div className='mobile-menu'>
          <NavLink onClick={handleClick} to='/'>
            Concept
          </NavLink>
          {data &&
            data.map(e => (
              <NavLink onClick={handleClick} key={e.id} to={`/poles/${e.id}`}>
                {e.pole_name}
              </NavLink>
            ))}
          <NavLink onClick={handleClick} to='/partenaires'>
            Partenaires
          </NavLink>
          <NavLink onClick={handleClick} to='/contact'>
            Contact
          </NavLink>
        </div>
      )}

      <div onClick={handleClick} className={`bar-container`}>
        <span className={`close-bar ${isOpen && 'open-bar'}`}></span>
        <span className={`close-bar ${isOpen && 'open-bar'}`}></span>
        <span className={`close-bar ${isOpen && 'open-bar'}`}></span>
      </div>
    </div>
  )
}

export default MobileNavBar
