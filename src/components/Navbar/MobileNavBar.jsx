import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import './MobileNavBar.css'
import Concept from './../Concept/Concept'

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
          <NavLink to='/'>Concept</NavLink>
          {data &&
            data.map(e => (
              <NavLink key={e.id} to={`/poles/${e.id}`}>
                {e.pole_name}
              </NavLink>
            ))}
          <NavLink to='/partenaires'>Partenaires</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
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
