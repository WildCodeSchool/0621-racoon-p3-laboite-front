import React from 'react'

import ActivAdmin from '../../screens/Admin/ActivAdmin'

const AdminFormActivityUpdate = ({
  adminInput,
  closeForm,
  deleteActivity,
  onChangeHandler,
  poles,
  resMessage,
  setAdminInput,
  setActivityImage,
  updateActivity
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour l&apos;activité</div>
      <div className='activityFormContainer'>
        <ActivAdmin
          adminInput={adminInput}
          onChangeHandler={onChangeHandler}
          poles={poles}
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setActivityImage={setActivityImage}
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
              deleteActivity(e)
          }}
        >
          Supprimer
        </div>
        <div className='btnForm blue' onClick={updateActivity}>
          Publier
        </div>
      </div>
    </div>
  )
}

export default AdminFormActivityUpdate
