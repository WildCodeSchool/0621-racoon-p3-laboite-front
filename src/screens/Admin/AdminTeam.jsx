import axios from 'axios'
import { useState, useEffect } from 'react'

import AdminCard from '../../components/Admin/AdminCard'
import AdminFormTeamCreate from '../../components/Admin/AdminFormTeamCreate'
import AdminFormTeamUpdate from '../../components/Admin/AdminFormTeamUpdate'
import AdminLeftMenu from '../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../components/Admin/AdminTopDiv'

import './Admin.css'

const AdminTeam = () => {
  // List of states
  const [refresh, setRefresh] = useState(false)
  const [newForm, setNewForm] = useState(false)
  const [form, setForm] = useState(false)
  const [memberToUpdate, setMemberToUpdate] = useState('')
  const [resMessage, setResMessage] = useState('')
  // List of team members NOT from backEnd
  const [team, setTeam] = useState([])
  useEffect(() => {
    const getTeam = async () => {
      const results = await axios.get(
        `${process.env.REACT_APP_URL_API}/members`
      )
      // console.log(results.data)
      setTeam(results.data)
    }
    getTeam()
  }, [refresh])

  const deleteMember = async () => {
    axios
      .delete(`${process.env.REACT_APP_URL_API}/members/${memberToUpdate}`)
      .then(resToBack => {
        console.log('res delete', resToBack)
        // setResMessage(resToBack.data.message)
        setRefresh(!refresh)
      })
      .catch(error => {
        if (error) {
          console.log('logErrDelet', error.response)
          // setResMessage(error.response.data.message)
        }
      })
    setTimeout(closeForm, 2000)
  }
  console.log(resMessage)

  // Functions to display forms
  const dispCreateForm = () => {
    setNewForm(true)
    setForm(false)
    // console.log('create')
  }
  const dispUpdateForm = e => {
    setNewForm(false)
    setForm(true)
    setMemberToUpdate(e.target.id)
    // console.log('update', e.target.id)
  }
  const closeForm = () => {
    setNewForm(false)
    setForm(false)
    // console.log('close')
  }

  return (
    <div className='adminContainer flex row'>
      <AdminLeftMenu />
      <div className='adminMenuRight flex col'>
        <div className='adminHeader'>
          Bienvenue dans l&apos;espace administration !
        </div>
        <div className='topDiv'>
          <AdminTopDiv elmt={'membres'} addElement={dispCreateForm} />
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {team.length === 0 ? (
                <div className='noCard'>
                  Il n&apos;y a pas encore d&apos;élement à afficher ! Merci de
                  créer un nouvel élément !
                </div>
              ) : (
                team.map(elmt => (
                  <AdminCard
                    key={elmt.id}
                    id={elmt.id}
                    name={elmt.member_name}
                    updateElement={dispUpdateForm}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className='bottomDiv flex col jcc aic'>
          {newForm && (
            <>
              <AdminFormTeamCreate
                setRefresh={setRefresh}
                closeForm={closeForm}
              />
            </>
          )}
          {form && (
            <>
              <AdminFormTeamUpdate
                setRefresh={setRefresh}
                closeForm={closeForm}
                deleteMember={deleteMember}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminTeam
