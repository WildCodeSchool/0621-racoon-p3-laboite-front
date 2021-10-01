import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLinkBtn = ({ name, id, picto, route }) => {
  return (
    <NavLink to={`/admin/${route}`}>
      <div className={`adminLinkButton id${id} flex row`}>
        <div className='logoContainer'>
          <div className='logo flex jcc aic'>{picto}</div>
        </div>
        <div className='btnName flex jcc aic'>{name}</div>
      </div>
    </NavLink>
  )
}

export default AdminLinkBtn
