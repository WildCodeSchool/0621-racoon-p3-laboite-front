import React, { useState, useCallback } from 'react'
import axios from 'axios'

import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeamUpdate = ({
  adminInput,
  closeForm,
  deleteMember,
  member,
  onChangeHandler,

  refresh,
  resMessage,
  setAdminInput,
  setRefresh,
  setResMessage
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour le membre</div>
      <div className='teamFormContainer'>
        <TeamAdmin
          member={member}
          adminInput={adminInput}
          deleteMember={deleteMember}
          onChangeHandler={onChangeHandler}
          refresh={refresh}
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setRefresh={setRefresh}
          setResMessage={setResMessage}
        />
      </div>
      <div className='btnContainer flex jcc'>
        <div
          className='btnForm'
          onClick={e => {
            if (
              window.confirm(
                'Etes-vous sûr(e) de vouloir supprimer ce membre ?'
              )
            )
              deleteMember(e)
          }}
        >
          Supprimer
        </div>
        <div className='btnForm blue'>Sauvegarder</div>
      </div>
    </div>
  )
}

export default AdminFormTeamUpdate
