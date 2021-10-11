import React from 'react'

import './form.css'

const TeamAdmin = ({ member, onChangeHandler, resMessage }) => {
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
            value={member && member.member_name && member.member_name}
          />
          <input
            focus
            placeholder={'URL de la photo'}
            key='member_img'
            name='member_img'
            onChange={onChangeHandler}
            value={member && member.member_img && member.member_img}
          />
          <textarea
            focus
            placeholder={'Role du membre'}
            key='member_role'
            name='member_role'
            rows='4'
            onChange={onChangeHandler}
            value={member && member.member_role && member.member_role}
          ></textarea>
          <span className='formError'>{resMessage && resMessage}</span>
        </div>
      </div>
    </div>
  )
}

export default TeamAdmin
