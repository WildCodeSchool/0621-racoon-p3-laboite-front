import axios from 'axios'
import { useState, useEffect } from 'react'

import ActivityAdmin from './ActivityAdmin'
import AdminCard from '../../components/Admin/AdminCard'
import AdminForm from '../../components/Admin/AdminForm'
import AdminLeftMenu from '../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../components/Admin/AdminTopDiv'

import './Admin.css'

const AdminActivity = () => {
  // List of activities NOT from backEnd (test only)
  // let notbackactivities = ['Bricolage', 'Electricité']
  // const [activities, setActivities] = useState(notbackactivities)

  // List of activities from backEnd
  const [activities, setActivities] = useState([])
  useEffect(() => {
    const getActivities = async () => {
      const results = await axios.get(
        `${process.env.REACT_APP_URL_API}/activities`
      )
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
      <AdminLeftMenu />
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
                    id={elmt.id}
                    name={elmt.activity_title}
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
