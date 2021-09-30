import AdminForm from './AdminForm'
import AdminLeftBtn from './AdminLeftBtn'
import './Admin.css'

const Admin = () => {
  const adminLeftButtonList = ['Pôles', 'Activités', 'Équipe']
  const poleList = [{ id: 1, name: 'conciergerie' }]

  return (
    <div className='adminContainer flex row'>
      <div className='adminMenuLeft flex col'>
        <div className='dashboard'>Dashboard</div>
        {adminLeftButtonList.map((btn, index) => (
          <AdminLeftBtn key={index} btn={btn} />
        ))}
      </div>
      <div className='adminMenuRight flex col'>
        <div className='adminHeader'>
          Bienvenue dans l&apos;espace administration !
        </div>
        <div className='topDiv'>
          <div className='topDivTitle'>Listes des pôles déjà en ligne</div>
          <div className='cardContainer flex row aic'>
            <div className='card colorme'></div>
            <div className='card colorme'></div>
            <div className='card colorme'></div>
          </div>
        </div>
        <div className='bottomDiv flex jcc'>
          <AdminForm />
        </div>
      </div>
    </div>
  )
}

export default Admin
