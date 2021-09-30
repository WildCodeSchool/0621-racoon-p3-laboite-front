import FormTiny from '../../components/Form/FormTiny'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import './form.css'

const TeamAdmin = () => {
  const [team, setTeam] = useState([])
  const [adminInput, setAdminInput] = useState({})

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4000/team`)
      console.log(results.data)
      setTeam(results.data)
    }
    recupData()
  }, [])

  console.log(team)
  const onChangeHandler = useCallback(({ target: { name, value } }) =>
    setAdminInput(state => ({ ...state, [name]: value }), [])
  )

  const setData = texte => {
    setAdminInput({ ...adminInput, tiny: texte })
  }

  return (
    <div>
      <div className='formDroplist'>
        <h3 className='formTitle'>Membres mises en ligne</h3>
        <select
          placeholder='Activités'
          clearable
          selection
          style={{
            width: '50%',
            margin: '20px',
            border: 'solid 1px black',
            background: '#CED4DA'
          }}
        >
          {team.map(member => (
            <option value={member.id}>{member.member_name}</option>
          ))}
        </select>
        <div className='droplistButton'>
          <button>Modifier</button>

          <button>Supprimer</button>
        </div>
      </div>
      <div className='FormContainer'>
        <h3 className='formTitleForm'>Nouveau membres</h3>
        <div className='FormList'>
          <button className='formAddUserBtn'>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
          <div className='formItems'>
            <input
              focus
              placeholder={'Nom du membre'}
              style={{ margin: '10px', border: 'solid 1px black' }}
              key='field2'
              name='field2'
              onChange={onChangeHandler}
              value={adminInput.field2}
            />
            <input
              focus
              placeholder={'URL de la photo'}
              style={{ margin: '10px', border: 'solid 1px black' }}
              key='field3'
              name='field3'
              onChange={onChangeHandler}
              value={adminInput.field3}
            />
            <FormTiny setData={setData} />
            <div className='formButton'>
              <button class='ui button'>sauvegarder</button>
              <button class='ui button'>publier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamAdmin
