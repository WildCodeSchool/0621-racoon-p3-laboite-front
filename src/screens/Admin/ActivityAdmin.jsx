import FormTiny from '../../components/Form/FormTiny'
import { Button, Dropdown, Icon, Input } from 'semantic-ui-react'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import 'semantic-ui-css/semantic.min.css'
import './ActivityAdmin.css'

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
        <Dropdown
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
          <Button class='ui button' style={{ background: '#868E96' }}>
            Modifier
          </Button>
          <Button class='ui button' style={{ background: '#868E96' }}>
            Supprimer
          </Button>
        </div>
      </div>
      <div className='activityFormContainer'>
        <h3 className='activityTitleForm'>Nouvelle activité</h3>
        <div className='activityFormList'>
          <Button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#E64980',
              border: 'solid 1px black'
            }}
          >
            <Icon disabled name='add' style={{ color: 'black' }} />
          </Button>
          <div className='activityItems'>
            <Dropdown
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
            <Input
              focus
              placeholder={`Titre de l'activité`}
              style={{ margin: '10px', border: 'solid 1px black' }}
              key='field2'
              name='field2'
              onChange={onChangeHandler}
              value={adminInput.field2}
            />
            <Input
              focus
              placeholder={`URL de l'image`}
              style={{ margin: '10px', border: 'solid 1px black' }}
              key='field3'
              name='field3'
              onChange={onChangeHandler}
              value={adminInput.field3}
            />
            <FormTiny setData={setData} />
            <Input
              focus
              placeholder={`Prix de l'activité`}
              style={{ margin: '10px', border: 'solid 1px black' }}
              key='field5'
              name='field5'
              onChange={onChangeHandler}
              value={adminInput.field5}
            />
            <div className='activityButton'>
              <Button class='ui button' style={{ background: '#868E96' }}>
                sauvegarder
              </Button>
              <Button class='ui button' style={{ background: '#868E96' }}>
                publier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityAdmin
