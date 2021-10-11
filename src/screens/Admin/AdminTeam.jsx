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
  const [newForm, setNewForm] = useState(false)
  const [form, setForm] = useState(false)
  const [team, setTeam] = useState([])
  const [idMemberToUpdate, setIdMemberToUpdate] = useState('')
  const [member, setMember] = useState('')
  const [resMessage, setResMessage] = useState('')
  const [adminInput, setAdminInput] = useState({})

  // List of team members from backEnd
  useEffect(() => {
    const getTeam = async () => {
      const results = await axios.get(
        `${process.env.REACT_APP_URL_API}/members`
      )
      setTeam(results.data)
    }
    getTeam()
  }, [refresh])

  // Get a member data from idMemberToUpdate
  useEffect(() => {
    const getMember = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/members/${idMemberToUpdate}`)
        .then(results => setMember(results.data))
    }
    getMember()
    console.log('update_member', idMemberToUpdate, member)
  }, [idMemberToUpdate])

  // Post a new member
  const postMember = () => {
    console.log('adminInput', adminInput)
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
    setTimeout(closeForm, 2000)
  }

  // Delete a member
  const deleteMember = () => {
    axios
      .delete(`${process.env.REACT_APP_URL_API}/members/${idMemberToUpdate}`)
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

  // Functions to display forms
  const dispCreateForm = () => {
    setNewForm(true)
    setForm(false)
  }
  const dispUpdateForm = e => {
    setNewForm(false)
    setForm(true)
    setIdMemberToUpdate(e.target.id)
  }
  const closeForm = () => {
    setNewForm(false)
    setForm(false)
  }

  const onChangeHandler = useCallback(
    ({ target: { name, value } }) =>
      console.log('change') ||
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
                    key={elmt.member_id}
                    id={elmt.member_id}
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
                setResMessage={setResMessage}
                closeForm={closeForm}
                onChangeHandler={onChangeHandler}
                adminInput={adminInput}
                postMember={postMember}
              />
            </>
          )}
          {form && (
            <>
              <AdminFormTeamUpdate
                member={member}
                setRefresh={setRefresh}
                setResMessage={setResMessage}
                closeForm={closeForm}
                deleteMember={deleteMember}
                onChangeHandler={onChangeHandler}
                adminInput={adminInput}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminTeam
