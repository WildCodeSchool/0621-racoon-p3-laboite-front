import { useState } from 'react'

import AdminForm from './AdminForm'
import AdminLinkBtn from './AdminLinkBtn'
import './Admin.css'

const Admin = () => {
  const adminLinkButtonList = [
    { id: 1, name: 'Pôles', picto: 'A', route: 'poles' },
    { id: 2, name: 'Activities', picto: 'B', route: 'activites' },
    { id: 3, name: 'Membres', picto: 'C', route: 'membres' }
  ]
  const [elementList, setElementList] = useState([
    'Conciergerie',
    'Végétal',
    'Recyclerie'
  ])
  const [isOpenForm, setIsOpenForm] = useState(false)

  const addElement = () => {
    setElementList(elementList.concat('Nouveau'))
    // console.log(elementList)
  }
  const displayForm = () => {
    setIsOpenForm(true)
    localStorage.setItem('IsOpenForm', true)
    console.log(isOpenForm, JSON.parse(localStorage.getItem('isOpenForm')))
    // console.log('Form visible: ', isVisibleForm)
  }

  return (
    <div className='adminContainer flex row'>
      <div className='adminMenuLeft flex col'>
        <div className='dashboard'>Dashboard</div>
        {adminLinkButtonList.map((btn, index) => (
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
        <div className='topDiv'>
          <div className='topDivTitle'>
            <p>Listes des pôles déjà en ligne</p>
            <div className='addButton flex row jcc aic' onClick={addElement}>
              <div>Nouvel élément</div>
              <div className='plusBtn flex jcc aic'>+</div>
            </div>
          </div>
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {elementList.map((elmt, index) => (
                <div
                  key={index}
                  className={`card id${index + 1} colorme`}
                  onClick={displayForm}
                >
                  {elmt}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='bottomDiv flex jcc'>
          {isOpenForm && <AdminForm displayForm={displayForm} />}
        </div>
      </div>
    </div>
  )
}

export default Admin
