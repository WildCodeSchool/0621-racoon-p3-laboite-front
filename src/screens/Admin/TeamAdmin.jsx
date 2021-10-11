import React, { useState, useCallback } from 'react'
import axios from 'axios'

import './form.css'

const TeamAdmin = ({ refresh, setRefresh }) => {
  const [adminInput, setAdminInput] = useState({ member_id: '1' })
  const [resMessage, setMessage] = useState('')

  const onChangeHandler = useCallback(({ target: { name, value } }) =>
    setAdminInput(state => ({ ...state, [name]: value }), [])
  )

  const setData = texte => {
    setAdminInput({ ...adminInput, tiny: texte })
  }

  const postData = () => {
    axios
      .post(`${process.env.REACT_APP_URL_API}/members`, [adminInput])
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

  return (
    <div className='FormContainer'>
      <div className='FormList formTeam'>
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
  )
}

export default TeamAdmin
