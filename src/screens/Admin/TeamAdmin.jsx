import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import './form.css'

const TeamAdmin = () => {
  const [team, setTeam] = useState([])
  const [adminInput, setAdminInput] = useState({ member_id: '1' })
  const [refresh, setRefresh] = useState(false)
  const [resMessage, setMessage] = useState('')

  const onChangeHandler = useCallback(({ target: { name, value } }) =>
    setAdminInput(state => ({ ...state, [name]: value }), [])
  )

  const setData = texte => {
    setAdminInput({ ...adminInput, tiny: texte })
  }

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`${process.env.REACT_APP_URL_API}/team`)
      console.log('res get', results.data)
      setTeam(results.data)
    }
    recupData()
  }, [refresh])

  const postData = () => {
    axios
      .post(`${process.env.REACT_APP_URL_API}/team`, [adminInput])
      .then(resToBack => {
        console.log('res post', resToBack)
        setMessage(resToBack.data.message)
        setRefresh(!refresh)
      })
      .catch(error => {
        if (error) {
          console.log('logErrPost', error.response)
          setMessage(error.response.data.message)
        }
      })
  }

  const deleteMember = async () => {
    console.log(('menberId', adminInput.member_id))
    const member_id = adminInput.member_id
    axios
      .delete(`${process.env.REACT_APP_URL_API}/team/${member_id}`)
      .then(resToBack => {
        console.log('res delete', resToBack)
        setMessage(resToBack.data.message)
        setRefresh(!refresh)
      })
      .catch(error => {
        if (error) {
          console.log('logErrDelet', error.response)
          setMessage(error.response.data.message)
        }
      })
  }

  console.log('message', resMessage)
  console.log(adminInput)
  return (
    <div>
      <div className='formDroplist'>
        <h3 className='formTitle'>Membres mises en ligne</h3>
        <select
          placeholder='Activités'
          clearable
          selection
          className='formSelect'
          onChange={e =>
            setAdminInput({ ...adminInput, member_id: e.target.value })
          }
        >
          {team.map(member => (
            <option key={member.id} value={member.id} name={member.member_name}>
              {member.member_name}
            </option>
          ))}
        </select>
        <div className='droplistButton'>
          <button>Modifier</button>

          <button onClick={deleteMember}>Supprimer</button>
        </div>
      </div>
      <div className='FormContainer'>
        <h3 className='formTitleForm'>Nouveau membres</h3>
        <div className='FormList formTeam'>
          <button className='formAddUserBtn'>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
          <div className='formItems formItemsTeam'>
            <input
              focus
              placeholder={'Nom du membre'}
              key='member_name'
              name='member_name'
              onChange={onChangeHandler}
              value={adminInput.member_name}
            />
            <input
              focus
              placeholder={'URL de la photo'}
              key='member_img'
              name='member_img'
              onChange={onChangeHandler}
              value={adminInput.member_img}
            />
            <textarea
              focus
              placeholder={'Role du membre'}
              key='member_role'
              name='member_role'
              rows='4'
              onChange={onChangeHandler}
              value={adminInput.member_role}
            ></textarea>
            <span className='formError'>{resMessage && resMessage}</span>
            <div className='formButton'>
              <button onClick={postData}>publier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamAdmin
