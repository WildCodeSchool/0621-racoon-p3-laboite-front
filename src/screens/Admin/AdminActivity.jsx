import axios from 'axios'

import { useState, useEffect, useCallback } from 'react'

import AdminCard from '../../components/Admin/AdminCard'
import AdminFormActivityCreate from '../../components/Admin/AdminFormActivityCreate'
import AdminFormActivityUpdate from '../../components/Admin/AdminFormActivityUpdate'
import AdminLeftMenu from '../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../components/Admin/AdminTopDiv'

import './Admin.css'

const AdminActivity = () => {
  // List of states
  const [refresh, setRefresh] = useState(false)
  const [createForm, setCreateForm] = useState(false)
  const [updateForm, setUpdateForm] = useState(false)
  const [activities, setActivities] = useState([])
  const [poles, setPoles] = useState([])
  const [idActivityToUpdate, setIdActivityToUpdate] = useState('')
  const [adminInput, setAdminInput] = useState({})
  const [resMessage, setResMessage] = useState('')
  const [activityImage, setActivityImage] = useState()

  // READ all activities from backEnd
  useEffect(() => {
    const getActivities = async () => {
      const results = await axios.get(
        `${process.env.REACT_APP_URL_API}/activities`
      )
      setActivities(results.data)
      // setLoading(false)
    }
    getActivities()
  }, [refresh])

  useEffect(() => {
    const getPoles = async () => {
      const results = await axios.get(`${process.env.REACT_APP_URL_API}/poles`)
      setPoles(results.data)
      // setLoading(false)
    }
    getPoles()
  }, [])

  //----------------------------------------------------------------------------
  // READ an activity data from idActivityToUpdate
  useEffect(() => {
    console.log('update_activity', idActivityToUpdate)
    setAdminInput('')
    setResMessage('')
    const getActivity = () => {
      axios
        .get(
          `${process.env.REACT_APP_URL_API}/activities/${idActivityToUpdate}`
        )
        .then(results => setAdminInput(results.data))
    }
    getActivity()
  }, [idActivityToUpdate])

  // CREATE a new activity
  const postActivity = async e => {
    e.preventDefault()
    const newPost = { ...adminInput }
    if (activityImage) {
      const fd = new FormData()
      const filename = Date.now() + activityImage.name
      fd.append('activity_img', activityImage, filename)
      newPost.activity_img = filename
      try {
        await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_API}/activitys`,
        newPost
      )
      // if (res){
      console.log('res post', res)
      setResMessage(res.data.message)
      setRefresh(!refresh)
      setTimeout(closeForm, 2500)
    } catch (err) {
      // if (err) {
      console.log('logErrPost', err.response)
      setResMessage(err.response.data.message)
      // }
    }
  }

  // UPDATE a activity
  const updateActivity = async e => {
    // console.log(idActivityToUpdate, adminInput)
    e.preventDefault()
    const newPut = { ...adminInput }
    if (activityImage) {
      const fd = new FormData()
      const filename = Date.now() + activityImage.name
      fd.append('activity_img', activityImage, filename)
      newPut.activity_img = filename
      try {
        await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_URL_API}/activitys/${idActivityToUpdate}`,
        newPut
      )
      // if (res){
      console.log('res update', res)
      setResMessage(res.data.message)
      setRefresh(!refresh)
      setTimeout(closeForm, 2500)
    } catch (error) {
      // if(error) {
      console.log('logErrUpdate', error.response)
      setResMessage(error.response.data.message)
      // }
    }
  }

  // DELETE aa activity
  const deleteActivity = () => {
    axios
      .delete(
        `${process.env.REACT_APP_URL_API}/activities/${idActivityToUpdate}`
      )
      .then(resToBack => {
        // console.log('res delete', resToBack)
        setResMessage(resToBack.data.message)
        setRefresh(!refresh)
        setTimeout(closeForm, 2500)
      })
      .catch(error => {
        if (error) {
          // console.log('logErrDelete', error.response)
          setResMessage(error.response.data.message)
        }
      })
  }
  //----------------------------------------------------------------------------

  // Functions to display forms
  const showCreateForm = () => {
    setAdminInput({}) // clear inputs
    setCreateForm(true) // open createForm
    setUpdateForm(false) // close updateForm
  }
  const showUpdateForm = e => {
    setCreateForm(false) // close createForm
    setUpdateForm(true) // open updateForm
    setIdActivityToUpdate(e.target.id) // auto-trigger getActivity
  }
  const closeForm = () => {
    setCreateForm(false) // close createForm
    setUpdateForm(false) // close updateForm
    setAdminInput({}) // clear inputs
    setIdActivityToUpdate('') // clear selected activity
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
          <AdminTopDiv elmt={'activités'} addElement={showCreateForm} />
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {activities.length === 0 ? (
                <div className='noCard'>
                  Il n&apos;y a pas encore d&apos;élement à afficher ! Merci de
                  créer un nouvel élément !
                </div>
              ) : (
                activities.map(elmt => (
                  <AdminCard
                    // key={elmt.activity_id}
                    // id={elmt.activity_id}
                    // name={elmt.activity_name}
                    key={elmt.id}
                    id={elmt.id}
                    name={elmt.activity_title}
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
              <AdminFormActivityCreate
                closeForm={closeForm}
                onChangeHandler={onChangeHandler}
                postActivity={postActivity}
                resMessage={resMessage}
                setAdminInput={setAdminInput}
                setActivityImage={setActivityImage}
              />
            </>
          )}
          {updateForm && (
            <>
              <AdminFormActivityUpdate
                adminInput={adminInput}
                closeForm={closeForm}
                deleteActivity={deleteActivity}
                onChangeHandler={onChangeHandler}
                resMessage={resMessage}
                setAdminInput={setAdminInput}
                setActivityImage={setActivityImage}
                updateActivity={updateActivity}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminActivity
