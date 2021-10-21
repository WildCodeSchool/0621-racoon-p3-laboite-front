import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import ActivityAdmin from '../../screens/Admin/AdminActivity/ActivityAdmin'

const AdminFormActivityUpdate = ({
  adminInput,
  closeForm,
  confirmTiny,
  deleteActivity,
  idActivityToUpdate,
  onChangeHandler,
  poles,
  resMessage,
  setActivityImage,
  setAdminInput,
  setConfirmTiny,
  updateActivity,
  updateAlert
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour l&apos;activité</div>
      <div className='activityFormContainer'>
        <ActivityAdmin
          onChangeHandler={onChangeHandler}
          adminInput={adminInput}
          setAdminInput={setAdminInput}
          confirmTiny={confirmTiny}
          setConfirmTiny={setConfirmTiny}
          poles={poles}
          resMessage={resMessage}
          setActivityImage={setActivityImage}
        />
      </div>
      <div className='btnContainer flex jcc'>
        <div
          className='btnForm'
          onClick={() => {
            deleteActivity(idActivityToUpdate)
          }}
        >
          Supprimer
        </div>
        <div className='btnForm blue' onClick={updateActivity}>
          Publier
        </div>
        <Snackbar
          open={updateAlert}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Alert severity='success'>Activité modifiée avec succès</Alert>
        </Snackbar>
      </div>
    </div>
  )
}

export default AdminFormActivityUpdate
