import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminLinkBtn = ({ name, id, picto, route }) => {
  return (
    <NavLink to={`/admin/${route}`}>
      <div className={`adminLinkButton id${id} flex row`}>
        <div className='logoContainer'>
          <FontAwesomeIcon icon={`${picto}`} />
        </div>
        <div className='btnName flex jcc aic'>{name}</div>
      </div>
    </NavLink>
  )
}

export default AdminLinkBtn
