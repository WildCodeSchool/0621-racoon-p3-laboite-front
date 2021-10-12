import * as Icons from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import FormTiny from '../../components/Form/FormTiny'
import FormActivity from './../../components/Form/FormActivity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React, { useState, useEffect, useCallback } from 'react'

import './ActivityAdmin.css'

const iconList = Object.keys(Icons)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => Icons[icon])

library.add(...iconList)

const ActivityAdmin = () => {
  const [activities, setActivities] = useState([])
  const [pole, setPole] = useState([])
  const [adminInput, setAdminInput] = useState({ pole: '1' })
  const [confirmTiny, setConfirmTiny] = useState(false)
  const [selectActivity, setSelectActivity] = useState('1')
  const [image, setImage] = useState()

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
    const getPole = async () => {
      const results = await axios.get(`${process.env.REACT_APP_URL_API}/poles`)
      setPole(results.data)
      // setLoading(false)
    }
    getPole()
  }, [])

  const submitData = async e => {
    e.preventDefault()
    // if (confirmTiny === true) {
    const newPost = { ...adminInput }
    if (image) {
      const fd = new FormData()
      const filename = Date.now() + image.name
      fd.append('activity_img', image, filename)

      console.log('coucou filename', filename, fd)
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
    } catch (err) {
      console.log(err)
    }
  }

  const deleteActivity = async selectActivity => {
    console.log(('id', selectActivity))
    const id = selectActivity
    const confirmation = confirm(' Voulez vousActivité supprimée')
    if (confirmation) {
      axios
        .delete(`${process.env.REACT_APP_URL_API}/activities/${id}`)
        .then(resToBack => {
          recupData()
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

  return (
    <>
      <div className='activityDroplist'>
        <h3 className='activityTitle'>Activités mises en ligne</h3>
        <select
          onChange={e =>
            console.log(e.target.value) || setSelectActivity(e.target.value)
          }
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
          <button
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
      <FormActivity
        setAdminInput={setAdminInput}
        adminInput={adminInput}
        onChangeHandler={onChangeHandler}
        setImage={setImage}
        image={image}
        pole={pole}
        setData={setData}
        setConfirmTiny={setConfirmTiny}
        confirmTiny={confirmTiny}
        submitData={submitData}
      />
    </>
  )
}

export default ActivityAdmin
