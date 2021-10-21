import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import ActivityAdmin from '../../screens/Admin/AdminActivity/ActivityAdmin'

const AdminFormActivityCreate = ({
  addAlert,
  adminInput,
  closeForm,
  confirmTiny,
  onChangeHandler,
  poles,
  postActivity,
  resMessage,
  setActivityImage,
  setAdminInput,
  setConfirmTiny
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Nouvelle activité</div>
      <div className='teamFormContainer'>
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
        <div className='btnForm' onClick={postActivity}>
          Publier
        </div>
        <Snackbar
          open={addAlert}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Alert severity='success'>Activité ajoutée avec succès</Alert>
        </Snackbar>
      </div>
    </div>
  )
}

export default AdminFormActivityCreate
