import React from 'react'

import './form.css'

const TeamAdmin = ({ adminInput, onChangeHandler, resMessage }) => {
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
            value={
              adminInput && adminInput.member_name && adminInput.member_name
            }
          />
          <input
            focus
            placeholder={'URL de la photo'}
            key='member_img'
            name='member_img'
            onChange={onChangeHandler}
            value={adminInput && adminInput.member_img && adminInput.member_img}
          />
          <textarea
            focus
            placeholder={'Role du membre'}
            key='member_role'
            name='member_role'
            rows='4'
            onChange={onChangeHandler}
            value={
              adminInput && adminInput.member_role && adminInput.member_role
            }
          ></textarea>
          <span className='formError'>{resMessage && resMessage}</span>
        </div>
      </div>
    </div>
  )
}

export default TeamAdmin
