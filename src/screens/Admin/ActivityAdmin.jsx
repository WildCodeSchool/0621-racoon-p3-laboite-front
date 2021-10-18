import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

import * as Icons from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import FormActivity from './../../components/Form/FormActivity'
import { library } from '@fortawesome/fontawesome-svg-core'
import React, { useState, useEffect, useCallback, useContext } from 'react'

import { Context } from '../../context/Context'

import './ActivityAdmin.css'
import FormModifyActivity from '../../components/Form/FormModifyActivity'

const iconList = Object.keys(Icons)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => Icons[icon])

library.add(...iconList)

const ActivityAdmin = () => {
  const [activities, setActivities] = useState([])
  const [poles, setPoles] = useState([])
  const [adminInput, setAdminInput] = useState({ pole: '1' })
  const [confirmTiny, setConfirmTiny] = useState(false)
  const [selectActivity, setSelectActivity] = useState('1')
  const [image, setImage] = useState()
  const [putImage, setPutImage] = useState()
  const [activityUpdate, setActivityUpdate] = useState({})

  const [showFormActivity, setShowFormActivity] = useState(false)
  const [showFormModifyActivity, setShowFormModifyActivity] = useState(false)
  const [open, setOpen] = useState(false)
  const [openAdd, setOpenAdd] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const { user } = useContext(Context)

  // Defini le Bearer JWT dans header pour les requetes de la page.
  axios.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`

  const recupData = async () => {
    const results = await axios.get(
      `${process.env.REACT_APP_URL_API}/activities`
    )
    setActivities(results.data)
    // setLoading(false)
  }

  useEffect(() => {
    recupData()
  }, [])

  useEffect(() => {
    const getPoles = async () => {
      const results = await axios.get(`${process.env.REACT_APP_URL_API}/poles`)
      setPoles(results.data)
      // setLoading(false)
    }
    getPoles()
  }, [])

  const submitData = async e => {
    e.preventDefault()
    const newPost = { ...adminInput, ...activityUpdate }
    if (image) {
      const fd = new FormData()
      const filename = Date.now() + image.name
      fd.append('activity_img', image, filename)
      newPost.activity_img = filename
      try {
        await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_API}/activities`,
        newPost
      )
      setOpenAdd(true)
    } catch (err) {
      console.log(err)
    }
  }

  // select an activity by id to modify
  const modifyActivity = selectActivity => {
    const modifyData = async () => {
      const id = selectActivity
      const result = await axios.get(`http://localhost:4000/activities/${id}`)
      setActivityUpdate(result.data)
    }
    modifyData()
  }

  const modifyData = async e => {
    e.preventDefault()
    const newPost = { ...activityUpdate }
    if (putImage) {
      const fd = new FormData()
      const filename = Date.now() + putImage.name
      fd.append('activity_img', putImage, filename)
      newPost.activity_img = filename
      try {
        await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_URL_API}/activities/${selectActivity}`,
        newPost
      )
     setOpenUpdate(true)
    } catch (err) {
      console.log(err)
    }
  }

  // stock in a function all the key:value of an object that I want do modify from setActivityUpdate
  const modifyValue = (name, value) => {
    setActivityUpdate({
      ...activityUpdate,
      [name]: value
    })
  }

  const deleteActivity = async selectActivity => {
    console.log(('id', selectActivity))
    const id = selectActivity
    const confirmation = confirm('Voulez-vous supprimer cette activité ?')
    if (confirmation) {
      axios
        .delete(`${process.env.REACT_APP_URL_API}/activities/${id}`)
        .then(resToBack => {
          recupData()
          setOpen(true)
          console.log('res delete', resToBack)
        })
        .catch(error => {
          if (error) {
            console.log('logErrDelet', error.response)
            alert(error.response.data.message)
          }
        })
    }
  }

  const onChangeHandler = useCallback(({ target: { name, value } }) =>
    setAdminInput(state => ({ ...state, [name]: value }), [])
  )
  // const onChangeHandler2 = (e) => {
  //     setAdminInput({...adminInput, [e.target.name]: e.target.value })
  // }

  const setData = texte => {
    setAdminInput({ ...adminInput, activity_desc: texte })
  }

  const setDataPut = texte => {
    setActivityUpdate({ ...activityUpdate, activity_desc: texte })
  }

  const handleModifyClick = () => {
    modifyActivity(selectActivity)
    setShowFormModifyActivity(!showFormModifyActivity)
  }

  return (
    <>
      <div className='activityDroplist'>
        <h3 className='activityTitle'>Activités mises en ligne</h3>
        <select
          onChange={e => setSelectActivity(e.target.value)}
          placeholder='Activités mises en ligne'
          style={{
            width: '50%',
            margin: '20px',
            border: 'solid 1px black',
            background: '#CED4DA'
          }}
        >
          {activities.map(activity => (
            <option key={activity.id} value={activity.id}>
              {activity.activity_title}
            </option>
          ))}
        </select>
        <div className='droplistButton'>
          <button onClick={e => setShowFormActivity(!showFormActivity)}>
            Ajouter
          </button>
          <button
            onClick={handleModifyClick}
            style={{
              background: '#868E96',
              border: 'solid 1px black',
              margin: '10px'
            }}
          >
            Modifier
          </button>
          <button
            onClick={() => deleteActivity(selectActivity)}
            style={{
              background: '#868E96',
              border: 'solid 1px black',
              margin: '10px'
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
      {showFormActivity && (
        <FormActivity
          setAdminInput={setAdminInput}
          adminInput={adminInput}
          onChangeHandler={onChangeHandler}
          setImage={setImage}
          image={image}
          poles={poles}
          setData={setData}
          setConfirmTiny={setConfirmTiny}
          confirmTiny={confirmTiny}
          submitData={submitData}
          openAdd={openAdd}
        />
      )}
      {showFormModifyActivity && (
        <FormModifyActivity
          setDataPut={setDataPut}
          setConfirmTiny={setConfirmTiny}
          confirmTiny={confirmTiny}
          setPutImage={setPutImage}
          modifyData={modifyData}
          activityUpdate={activityUpdate}
          modifyValue={modifyValue}
          openUpdate={openUpdate}
        />
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }} >
        <Alert onClose={handleClose} severity="success">
          Activité supprimée avec succès
        </Alert>
        </Snackbar>
    </>
  )
}

export default ActivityAdmin
