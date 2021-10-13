import React from 'react'
import { NavLink } from 'react-router-dom'

import AdminLinkBtn from './AdminLinkBtn'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminLeftMenu = () => {
  const adminFieldList = [
    { id: 1, name: 'Pôles', picto: 'building', route: 'poles' },
    { id: 2, name: 'Activités', picto: 'network-wired', route: 'activity' },
    { id: 3, name: 'Membres', picto: 'users', route: 'members' }
  ]

  return (
    <div className='adminMenuLeft flex col'>
      <NavLink to={'/admin'} className='dashboard flex row jcc aic'>
        <FontAwesomeIcon icon={'desktop'} />
        <div className='dashboardTitle'>Dashboard</div>
      </NavLink>
      {adminFieldList.map((btn, index) => (
        <AdminLinkBtn
          key={index}
          name={btn.name}
          picto={btn.picto}
          id={btn.id}
          route={btn.route}
        />
      ))}
    </div>
  )
}

export default AdminLeftMenu
