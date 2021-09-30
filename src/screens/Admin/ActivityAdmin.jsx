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
  const [activity, setActivity] = useState([])
  const [pole, SetPole] = useState([])
  const [adminInput, setAdminInput] = useState({})

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4000/pole`)
      setActivity(results.data)
      // setLoading(false)
    }
    recupData()
  }, [])

  const onChangeHandler = useCallback(({ target: { name, value } }) =>
    setAdminInput(state => ({ ...state, [name]: value }), [])
  )

  const setData = texte => {
    setAdminInput({ ...adminInput, tiny: texte })
  }

  const activityOnline = [
    { key: 1, text: 'blabla', value: 1 },
    { key: 2, text: 'dodo', value: 2 },
    { key: 3, text: 'yooo', value: 3 }
  ]
  const poleList = [
    { key: 1, text: 'blabla', value: 1 },
    { key: 2, text: 'dodo', value: 2 },
    { key: 3, text: 'yooo', value: 3 }
  ]

  console.log(adminInput)
  return (
    <div>
      <div className='activityDroplist'>
        <h3 className='activityTitle'>Activités mises en ligne</h3>
        <select
          placeholder='Activités'
          clearable
          options={activityOnline}
          selection
          style={{
            width: '50%',
            margin: '20px',
            border: 'solid 1px black',
            background: '#CED4DA'
          }}
        />
        <div className='droplistButton'>
          <button style={{ 
            background: '#868E96', 
            border: 'solid 1px black', 
            margin: '10px'
            }}>
            Modifier
          </button>
          <button style={{ 
            background: '#868E96', 
            border: 'solid 1px black', 
            margin: '10px'
            }}>
            Supprimer
          </button>
        </div>
      </div>
      <div className='activityContainer'>
        <h3 className='activityTitleForm'>Nouvelle activité</h3>
        <div className='activityFormWrapper'>
          <button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#E64980',
              border: 'solid 1px black'
            }}
          >
            <FontAwesomeIcon icon='plus' style={{ color: 'black' }} />
          </button>
          <div className='activityForm'>
            <div className='activityCross'>
              <select
                placeholder='Poles'
                clearable
                options={poleList}
                selection
                style={{
                  width: '25%',
                  margin: '15px',
                  border: 'solid 1px black',
                  background: '#CED4DA'
                }}
              />
              <button style={{ 
                background: '#CED4DA', 
                border: 'solid 1px black'
                }}>
                <FontAwesomeIcon icon='times' style={{ color: 'black'}} />
              </button>
            </div>
            <input
              focus
              placeholder={`Titre de l'activité`}
              style={{ 
                margin: '10px', 
                border: 'solid 1px black', 
                background: '#CED4DA' 
              }}
              key='field2'
              name='field2'
              onChange={onChangeHandler}
              value={adminInput.field2}
            />
            <input
              focus
              placeholder={`URL de l'image`}
              style={{ 
                margin: '10px', 
                border: 'solid 1px black', 
                background: '#CED4DA' 
              }}
              key='field3'
              name='field3'
              onChange={onChangeHandler}
              value={adminInput.field3}
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
              <button style={{ 
                background: '#868E96', 
                border: 'solid 1px black'
                }}>
                sauvegarder
              </button>
              <button style={{ 
                background: '#868E96', 
                border: 'solid 1px black' 
                }}>
                publier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityAdmin
