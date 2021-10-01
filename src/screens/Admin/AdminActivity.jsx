import axios from 'axios'
import { useState, useEffect } from 'react'

import ActivityAdmin from './ActivityAdmin'
import AdminCard from '../../components/Admin/AdminCard'
import AdminForm from '../../components/Admin/AdminForm'
import AdminLinkBtn from '../../components/Admin/AdminLinkBtn'
import AdminTopDiv from '../../components/Admin/AdminTopDiv'

import './Admin.css'

const AdminActivity = () => {
  // List of fields from backEnd (to do)
  const adminFieldList = [
    { id: 1, name: 'Pôles', picto: 'A', route: 'pole' },
    { id: 2, name: 'Activités', picto: 'B', route: 'activity' },
    { id: 3, name: 'Membres', picto: 'C', route: 'team' }
  ]
  // List of activities NOT from backEnd
  // let notbackactivities = ['Bricolage', 'Electricité']
  // const [activities, setActivities] = useState(notbackactivities)

  // List of activities from backEnd
  const [activities, setActivities] = useState([])
  useEffect(() => {
    const getActivities = async () => {
      const results = await axios.get(`http://localhost:4000/activities`)
      // console.log(results.data)
      setActivities(results.data)
    }
    getActivities()
  }, [])

  // Variable to check if form is open
  const [isOpenForm, setIsOpenForm] = useState(false)

  // Function to add a new element to list
  const addElement = () => {
    setActivities(activities.concat('Nouveau'))
  }
  // Function to remove an element from list
  const removeElement = () => {
    setActivities(activities.pop())
  }

  // Function to display form
  const displayForm = e => {
    let myClass = e.target.className
    console.log('class', myClass)

    setIsOpenForm(true)
    localStorage.setItem('IsOpenForm', true)
    // console.log(isOpenForm, JSON.parse(localStorage.getItem('isOpenForm')))
  }

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
        <div className='topDiv'>
          <AdminTopDiv elmt={'activités'} addElement={addElement} />
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {activities.length === 0 ? (
                <div className='noCard'>
                  Il n&apos;y a pas encore d&apos;élement à afficher ! Merci de
                  créer un nouvel élément !
                </div>
              ) : (
                activities.map((elmt, index) => (
                  <AdminCard
                    key={index}
                    elmt={elmt.activity_desc}
                    id={elmt.id}
                    displayForm={displayForm}
                    removeElement={removeElement}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className='bottomDiv flex col jcc aic'>
          {isOpenForm && (
            <>
              <AdminForm displayForm={displayForm} />
              <ActivityAdmin />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminActivity
