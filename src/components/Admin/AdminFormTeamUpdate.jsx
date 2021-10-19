import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import TeamAdmin from '../../screens/Admin/AdminTeam/TeamAdmin'

const AdminFormTeamUpdate = ({
  adminInput,
  closeForm,
  deleteMember,
  onChangeHandler,
  resMessage,
  setAdminInput,
  setMemberImage,
  updateMember,
  updateAlert
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
          onChangeHandler={onChangeHandler}
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setMemberImage={setMemberImage}
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
