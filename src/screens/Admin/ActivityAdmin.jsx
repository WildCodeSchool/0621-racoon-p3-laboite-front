import * as Icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import FormTiny from '../../components/Form/FormTiny'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

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
      const results = await axios.get(`${process.env.REACT_APP_URL_API}/pole`)
      setPole(results.data)
      // setLoading(false)
    }
    getPole()
  }, [])

  const submitData = e => {
    e.preventDefault()
    console.log(adminInput)
    if (confirmTiny === true) {
      axios
        .post(`${process.env.REACT_APP_URL_API}/activities`, adminInput)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      setConfirmTiny(false)
    } else {
      alert('Confirmer avant de publier')
    }
  }

  const deleteActivity = async selectActivity => {
    console.log(('id', selectActivity))
    const id = selectActivity
    axios
      .delete(`${process.env.REACT_APP_URL_API}/activities/${id}`)
      .then(resToBack => {
        recupData()
        console.log('res delete', resToBack)
        alert('Activité supprimé')
      })
      .catch(error => {
        if (error) {
          console.log('logErrDelet', error.response)
          alert(error.response.data.message)
        }
      })
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
    <div>
      {/* ------------ drop menu activies Start------------------ */}
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
      {/* ------------ drop menu activies End------------------ */}
      {/* ------------ form add activies Start------------------ */}
      <div className='activityContainer'>
        <h3 className='activityTitleForm'>Nouvelle activité</h3>
        <div className='activityFormWrapper'>
          <div className='activityItems'>
            <div className='activityCross'>
              <button>
                <FontAwesomeIcon icon='plus' style={{ color: 'black' }} />
              </button>
              {/* -----select Pole Start-----  */}
              <div className='activityForm'>
                <div className='activityCross'>
                  <select
                    placeholder='Les poles'
                    onChange={e =>
                      setAdminInput({ ...adminInput, pole: e.target.value })
                    }
                    style={{
                      width: '25%',
                      margin: '15px',
                      border: 'solid 1px black',
                      background: '#CED4DA'
                    }}
                  >
                    {pole.map(pole => (
                      <option
                        key={pole.id}
                        name={pole.pole_title}
                        value={pole.id}
                      >
                        {pole.pole_title}
                      </option>
                    ))}
                  </select>
                  {/* -----select Pole End-----  */}
                  <button
                    style={{
                      background: '#CED4DA',
                      border: 'solid 1px black'
                    }}
                  >
                    <FontAwesomeIcon icon='times' style={{ color: 'black' }} />
                  </button>
                </div>
                <input
                  focus
                  type='text'
                  placeholder={`Titre de l'activité`}
                  key='activity_title'
                  name='activity_title'
                  style={{
                    margin: '10px',
                    border: 'solid 1px black',
                    background: '#CED4DA'
                  }}
                  onChange={onChangeHandler}
                  value={adminInput.activity_title}
                />
                <input
                  focus
                  placeholder={`URL de l'image`}
                  key='activity_img'
                  name='activity_img'
                  style={{
                    margin: '10px',
                    border: 'solid 1px black',
                    background: '#CED4DA'
                  }}
                  onChange={onChangeHandler}
                  value={adminInput.activity_img}
                />
                <FormTiny setData={setData} setConfirmTiny={setConfirmTiny} />
                <input
                  focus
                  placeholder={`Prix de l'activité`}
                  style={{
                    margin: '10px',
                    border: 'solid 1px black',
                    background: '#CED4DA'
                  }}
                  key='field5'
                  name='field5'
                  onChange={onChangeHandler}
                  value={adminInput.field5}
                />
                <div className='activityButton'>
                  <p style={{ color: 'white' }}>
                    Penser à confirmer avant de publier
                  </p>
                  <button
                    disabled={!confirmTiny}
                    onClick={submitData}
                    style={{
                      cursor: 'pointer',
                      background: '#868E96',
                      border: 'solid 1px black'
                    }}
                  >
                    Publier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityAdmin
