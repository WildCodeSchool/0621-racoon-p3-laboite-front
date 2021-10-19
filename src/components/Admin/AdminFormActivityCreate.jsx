import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import ActivAdmin from '../../screens/Admin/AdminActivity/ActivAdmin'

const AdminFormActivityCreate = ({
  adminInput,
  closeForm,
  onChangeHandler,
  poles,
  postActivity,
  resMessage,
  setAdminInput,
  setActivityImage,
  confirmTiny,
  setConfirmTiny,
  addAlert
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Nouvelle activité</div>
      <div className='teamFormContainer'>
        <ActivAdmin
          adminInput={adminInput}
          onChangeHandler={onChangeHandler}
          poles={poles}
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setActivityImage={setActivityImage}
          confirmTiny={confirmTiny}
          setConfirmTiny={setConfirmTiny}
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
