import { NavLink } from 'react-router-dom'

import './NavbarLink.css'

const NavbarLink = ({ navTo, NavTitle }) => {
  return (
    <div className='skew-navlink'>
      <NavLink to={navTo}>{NavTitle}</NavLink>
    </div>
  )
}

export default NavbarLink
