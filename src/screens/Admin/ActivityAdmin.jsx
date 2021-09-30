import FormTiny from '../../components/Form/FormTiny'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import './ActivityAdmin.css'

const ActivityAdmin = () => {
  const [activities, setActivities] = useState([])
  const [pole, SetPole] = useState([])
  const [adminInput, setAdminInput] = useState({})

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4000/activities`)
      setActivities(results.data)
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

  // const activityOnline = [
  //   { key: 1, text: 'blabla', value: 1 },
  //   { key: 2, text: 'dodo', value: 2 },
  //   { key: 3, text: 'yooo', value: 3 }
  //]
  const poleList = [
    { key: 1, text: 'blabla', value: 1 },
    { key: 2, text: 'dodo', value: 2 },
    { key: 3, text: 'yooo', value: 3 }
  ]

  const activityOnline = activities.map(activity => activity.activity_title)

  console.log(activityOnline);

  // console.log(adminInput)
  // console.log(activities)
  return (
    <div>
      <div className='activityDroplist'>
        <h3 className='activityTitle'>Activités mises en ligne</h3>
        <select>
          <option value="dog">Dog</option>
          options={activityOnline}
          
          style={{
            width: '50%',
            margin: '20px',
            border: 'solid 1px black',
            background: '#CED4DA'
          }}
        </select>
        <div className='droplistButton'>
          <button style={{ background: '#868E96' }}>
            Modifier
          </button>
          <button style={{ background: '#868E96' }}>
            Supprimer
          </button>
        </div>
      </div>
      <div className='activityFormContainer'>
        <h3 className='activityTitleForm'>Nouvelle activité</h3>
        <div className='activityFormList'>
          <button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#E64980',
              border: 'solid 1px black'
            }}
          >
            <Icon name='add' style={{ color: 'black' }} />
          </button>
          <div className='activityItems'>
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
              <button>
                <Icon className='closeIcon' name='close' />
              </Button>
            </div>
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
