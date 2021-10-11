import React from 'react'

import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeamUpdate = ({
  adminInput,
  closeForm,
  deleteMember,
  member,
  onChangeHandler,
  resMessage
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour le membre</div>
      <div className='teamFormContainer'>
        <TeamAdmin
          adminInput={adminInput}
          member={member}
          onChangeHandler={onChangeHandler}
          resMessage={resMessage}
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
        <div className='btnForm blue'>Publier</div>
      </div>
    </div>
  )
}

export default AdminFormTeamUpdate
