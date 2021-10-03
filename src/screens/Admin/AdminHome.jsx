import AdminLeftMenu from '../../components/Admin/AdminLeftMenu'

import './Admin.css'

const AdminHome = () => {
  return (
    <div className='adminContainer flex row'>
      <AdminLeftMenu />
      <div className='adminMenuRight flex col'>
        <div className='adminHeader'>
          Bienvenue dans l&apos;espace administration !
        </div>
      </div>
    </div>
  )
}

export default AdminHome
