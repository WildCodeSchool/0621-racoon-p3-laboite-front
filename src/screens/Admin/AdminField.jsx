import { NavLink } from 'react-router-dom'

import './Admin.css'

const AdminField = () => {
  return (
    <div className='blacktxt flex col'>
      <NavLink to={'/admin/poles'}>Poles</NavLink>
      <NavLink to={'/admin/activites'}>Activités</NavLink>
      <NavLink to={'/admin/membres'}>Membres</NavLink>
    </div>
  )
}

export default AdminField
