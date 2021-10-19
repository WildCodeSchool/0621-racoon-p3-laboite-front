import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import TeamAdmin from '../../screens/Admin/AdminTeam/TeamAdmin'

const AdminFormTeamCreate = ({
  adminInput,
  closeForm,
  onChangeHandler,
  postMember,
  resMessage,
  setAdminInput,
  setMemberImage,
  addAlert
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Nouveau membre</div>
      <div className='teamFormContainer'>
        <TeamAdmin
          adminInput={adminInput}
          onChangeHandler={onChangeHandler}
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setMemberImage={setMemberImage}
        />
      </div>
      <div className='btnContainer flex jcc'>
        <div className='btnForm' onClick={postMember}>
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
            <Alert severity='success'>
              Membre ajouté avec succès
            </Alert>
          </Snackbar>
      </div>
    </div>
  )
}

export default AdminFormTeamCreate
