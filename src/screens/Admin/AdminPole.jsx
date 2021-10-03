import axios from 'axios'
import { useState, useEffect } from 'react'

// import PoleAdmin from './PoleAdmin'
import AdminCard from '../../components/Admin/AdminCard'
import AdminForm from '../../components/Admin/AdminForm'
import AdminLeftMenu from '../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../components/Admin/AdminTopDiv'

import './Admin.css'

const AdminPole = () => {
  // List of poles NOT from backEnd (test only)
  // let notbackpole = ['Conciergerie', 'Végétal', 'Recyclerie']
  // const [poles, setPoles] = useState(notbackpole)

  // List of poles from backEnd
  const [poles, setPoles] = useState([])
  useEffect(() => {
    const getPoles = async () => {
      const results = await axios.get(`http://localhost:4000/pole`)
      // console.log(results.data)
      setPoles(results.data)
    }
    getPoles()
  }, [])

  // Variable to check if form is open
  const [isOpenForm, setIsOpenForm] = useState(false)
  // Function to add a new element to list
  const addElement = () => {
    setPoles(poles.concat('Nouveau'))
  }
  // Function to remove an element from list
  const removeElement = () => {
    setPoles(poles.pop())
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
          <AdminTopDiv elmt={'poles'} addElement={addElement} />
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {poles.length === 0 ? (
                <div className='noCard'>
                  Il n&apos;y a pas encore d&apos;élement à afficher ! Merci de
                  créer un nouvel élément !
                </div>
              ) : (
                poles.map((elmt, index) => (
                  <AdminCard
                    key={index}
                    elmt={elmt.pole_name}
                    id={elmt.id}
                    img={elmt.pole_miniature_img}
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
              <div>PoleAdmin</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPole
