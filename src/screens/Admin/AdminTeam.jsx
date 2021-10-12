import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'

import AdminCard from '../../components/Admin/AdminCard'
import AdminFormTeamCreate from '../../components/Admin/AdminFormTeamCreate'
import AdminFormTeamUpdate from '../../components/Admin/AdminFormTeamUpdate'
import AdminLeftMenu from '../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../components/Admin/AdminTopDiv'

import './Admin.css'

const AdminTeam = () => {
  // List of states
  const [refresh, setRefresh] = useState(false)
  const [createForm, setCreateForm] = useState(false)
  const [updateForm, setUpdateForm] = useState(false)
  const [team, setTeam] = useState([])
  const [idMemberToUpdate, setIdMemberToUpdate] = useState('')
  const [adminInput, setAdminInput] = useState({})
  const [resMessage, setResMessage] = useState('')

  // READ all team members from backEnd
  useEffect(() => {
    const getTeam = async () => {
      const results = await axios.get(
        `${process.env.REACT_APP_URL_API}/members`
      )
      setTeam(results.data)
    }
    getTeam()
  }, [refresh])

  // READ a member data from idMemberToUpdate
  useEffect(() => {
    console.log('update_member', idMemberToUpdate)
    setAdminInput('')
    setResMessage('')
    const getMember = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/members/${idMemberToUpdate}`)
        .then(results => setAdminInput(results.data))
    }
    getMember()
  }, [idMemberToUpdate])

  // CREATE a new member
  const postMember = () => {
    axios
      .post(`${process.env.REACT_APP_URL_API}/members`, [adminInput])
      .then(resToBack => {
        console.log('res post', resToBack)
        setResMessage(resToBack.data.message)
        setRefresh(!refresh)
      })
      .catch(error => {
        if (error) {
          console.log('logErrPost', error.response)
          setResMessage(error.response.data.message)
        }
      })
    setTimeout(closeForm, 2500)
  }

  // UPDATE a member
  const updateMember = () => {
    // console.log(idMemberToUpdate, adminInput)
    axios
      .put(
        `${process.env.REACT_APP_URL_API}/members/${idMemberToUpdate}`,
        adminInput
      )
      .then(resToBack => {
        console.log('res update', resToBack)
        setResMessage(resToBack.data.message)
        setRefresh(!refresh)
      })
      .catch(error => {
        if (error) {
          console.log('logErrUpdate', error.response)
          setResMessage(error.response.data.message)
        }
      })
    setTimeout(closeForm, 2500)
  }

  // DELETE a member
  const deleteMember = () => {
    axios
      .delete(`${process.env.REACT_APP_URL_API}/members/${idMemberToUpdate}`)
      .then(resToBack => {
        // console.log('res delete', resToBack)
        setResMessage(resToBack.data.message)
        setRefresh(!refresh)
      })
      .catch(error => {
        if (error) {
          // console.log('logErrDelete', error.response)
          setResMessage(error.response.data.message)
        }
      })
    setTimeout(closeForm, 2500)
  }

  // Functions to display forms
  const showCreateForm = () => {
    setAdminInput({}) // clear inputs
    setCreateForm(true) // open createForm
    setUpdateForm(false) // close updateForm
  }
  const showUpdateForm = e => {
    setCreateForm(false) // close createForm
    setUpdateForm(true) // open updateForm
    setIdMemberToUpdate(e.target.id) // auto-trigger getMember
  }
  const closeForm = () => {
    setCreateForm(false) // close createForm
    setUpdateForm(false) // close updateForm
    setAdminInput({}) // clear inputs
    setIdMemberToUpdate('') // clear selected member
    setResMessage('') // clear message
  }
  //Function to update inputs
  const onChangeHandler = useCallback(
    ({ target: { name, value } }) =>
      console.log('inputChange') ||
      setAdminInput(state => ({ ...state, [name]: value }), [])
  )

  return (
    <div className='adminContainer flex row'>
      <AdminLeftMenu />
      <div className='adminMenuRight flex col'>
        <div className='adminHeader'>
          Bienvenue dans l&apos;espace administration !
        </div>
        <div className='topDiv'>
          <AdminTopDiv elmt={'membres'} addElement={showCreateForm} />
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
                    key={elmt.member_id}
                    id={elmt.member_id}
                    name={elmt.member_name}
                    updateElement={showUpdateForm}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className='bottomDiv flex col jcc aic'>
          {createForm && (
            <>
              <AdminFormTeamCreate
                closeForm={closeForm}
                onChangeHandler={onChangeHandler}
                postMember={postMember}
                resMessage={resMessage}
              />
            </>
          )}
          {updateForm && (
            <>
              <AdminFormTeamUpdate
                adminInput={adminInput}
                closeForm={closeForm}
                deleteMember={deleteMember}
                onChangeHandler={onChangeHandler}
                resMessage={resMessage}
                updateMember={updateMember}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminTeam
