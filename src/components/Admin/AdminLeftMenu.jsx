import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Icons from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AdminLinkBtn from './AdminLinkBtn'

const AdminLeftMenu = () => {
  //import all required fontAwesome icons in library
  const iconList = Object.keys(Icons)
    .filter(key => key !== 'fas' && key !== 'prefix')
    .map(icon => Icons[icon])
  library.add(...iconList)

  const adminFieldList = [
    { id: 1, name: 'Pôles', picto: 'building', route: 'poles' },
    { id: 2, name: 'Activités', picto: 'network-wired', route: 'activities' },
    { id: 3, name: 'Membres', picto: 'users', route: 'members' },
    { id: 4, name: 'Partenaires', picto: 'hands-helping', route: 'partners' }
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
