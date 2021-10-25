import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import TeamAdmin from '../../screens/Admin/AdminTeam/TeamAdmin'

const AdminFormTeamUpdate = ({
  adminInput,
  closeForm,
  deleteMember,
  idMemberToUpdate,
  onChangeHandler,
  resMessage,
  setAdminInput,
  setMemberImage,
  updateAlert,
  updateMember
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour le membre</div>
      <div className='teamFormContainer'>
        <TeamAdmin
          onChangeHandler={onChangeHandler}
          adminInput={adminInput}
          setAdminInput={setAdminInput}
          resMessage={resMessage}
          setMemberImage={setMemberImage}
        />
      </div>
      <div className='btnContainer flex jcc'>
        <div
          className='btnForm'
          onClick={() => {
            deleteMember(idMemberToUpdate)
          }}
        >
          Supprimer
        </div>
        <div className='btnForm blue' onClick={updateMember}>
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
          <Alert severity='success'>Membre modifié avec succès</Alert>
        </Snackbar>
      </div>
    </div>
  )
}

export default AdminFormTeamUpdate
