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

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4000/activities`)
      setActivities(results.data)
      // setLoading(false)
    }
    recupData()
  }, [])

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4000/pole`)
      setPole(results.data)
      // setLoading(false)
    }
    recupData()
  }, [])

  const submitData = e => {
    e.preventDefault()
    console.log(adminInput)
    axios
      .post('http://localhost:4000/activities', adminInput)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const onChangeHandler = useCallback(({ target: { name, value } }) =>
    setAdminInput(state => ({ ...state, [name]: value }), [])
  )

  const setData = texte => {
    setAdminInput({ ...adminInput, activity_desc: texte })
  }

  return (
    <div>
      {console.log('poulet02', adminInput)}
      <div className='activityDroplist'>
        <h3 className='activityTitle'>Activités mises en ligne</h3>
        <select
          // value={activities}
          // onChange = {(e) =>  {
          // const selectedActivity = e.target.value;
          // setActivities(selectedActivity)}}
          placeholder='Activités mises en ligne'
          style={{
            width: '50%',
            margin: '20px',
            border: 'solid 1px black',
            background: '#CED4DA'
          }}
        >
          {activities.map(activity => (
            <option value={activity.id}>{activity.activity_title}</option>
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
      <div className='activityContainer'>
        <h3 className='activityTitleForm'>Nouvelle activité</h3>
        <div className='activityFormWrapper'>
          {/* <button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#E64980',
              border: 'solid 1px black'
            }}
          ></button> */}
          <div className='activityItems'>
            <div className='activityCross'>
              <button>
                <FontAwesomeIcon icon='plus' style={{ color: 'black' }} />
              </button>
              <div className='activityForm'>
                <div className='activityCross'>
                  <select
                    placeholder='Les poles'
                    onChange={e =>
                      console.log('poulet01', e.target.value) ||
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
                      <option name={pole.pole_title} value={pole.id}>
                        {pole.pole_title}
                      </option>
                    ))}
                  </select>
                  {/* <select
                    placeholder='Poles'
                    clearable
                    options={pole_title}
                    selection
                    style={{
                      width: '25%',
                      margin: '15px',
                      border: 'solid 1px black',
                      background: '#CED4DA'
                    }}
                  /> */}
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
                <FormTiny setData={setData} />
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
                  <button
                    onClick={submitData}
                    style={{
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
