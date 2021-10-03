import axios from 'axios'
import { useState, useEffect } from 'react'

import AdminCard from '../../components/Admin/AdminCard'
import AdminFormTeam from '../../components/Admin/AdminFormTeam'
import AdminLeftMenu from '../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../components/Admin/AdminTopDiv'

import './Admin.css'

const AdminTeam = () => {
  // List of team members NOT from backEnd (test only)
  // let notbackteam = ['Sylvie Vannier', 'Thierry Petonnet', 'Hélène Ferreira']
  // const [team, setTeam] = useState(notbackteam)

  // List of team members NOT from backEnd
  const [team, setTeam] = useState([])
  useEffect(() => {
    const getTeam = async () => {
      const results = await axios.get(`http://localhost:4000/team`)
      // console.log(results.data)
      setTeam(results.data)
    }
    getTeam()
  }, [team])

  // Variable to check if form is open
  const [isOpenForm, setIsOpenForm] = useState(false)
  // Function to add a new element to list
  const addElement = () => {
    // setTeam(team.concat('Nouveau'))
  }
  // Function to remove an element from list
  const removeElement = () => {
    // setTeam(team.pop())
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
          <AdminTopDiv elmt={'membres'} addElement={addElement} />
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {team.length === 0 ? (
                <div className='noCard'>
                  Il n&apos;y a pas encore d&apos;élement à afficher ! Merci de
                  créer un nouvel élément !
                </div>
              ) : (
                team.map((elmt, index) => (
                  <AdminCard
                    key={index}
                    elmt={elmt.member_name}
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
              <AdminFormTeam />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminTeam
