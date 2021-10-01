import AdminLinkBtn from '../../components/Admin/AdminLinkBtn'

import './Admin.css'

const AdminHome = () => {
  // List of fields from backEnd
  const adminFieldList = [
    { id: 1, name: 'Pôles', picto: 'A', route: 'pole' },
    { id: 2, name: 'Activités', picto: 'B', route: 'activity' },
    { id: 3, name: 'Membres', picto: 'C', route: 'team' }
  ]

  return (
    <div className='adminContainer flex row'>
      <div className='adminMenuLeft flex col'>
        <div className='dashboard'>Dashboard</div>
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
      <div className='adminMenuRight flex col'>
        <div className='adminHeader'>
          Bienvenue dans l&apos;espace administration !
        </div>
      </div>
    </div>
  )
}

export default AdminHome
