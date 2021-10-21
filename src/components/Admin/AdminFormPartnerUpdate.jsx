import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'

import PartnerAdmin from '../../screens/Admin/AdminPartner/PartnerAdmin'

const AdminFormPartnerUpdate = ({
  adminInput,
  closeForm,
  deletePartner,
  idPartnerToUpdate,
  onChangeHandler,
  resMessage,
  setAdminInput,
  setPartnerImage,
  updateAlert,
  updatePartner
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour le partenaire</div>
      <div className='partnerFormContainer'>
        <PartnerAdmin
          onChangeHandler={onChangeHandler}
          adminInput={adminInput}
          setAdminInput={setAdminInput}
          resMessage={resMessage}
          setPartnerImage={setPartnerImage}
        />
      </div>
      <div className='btnContainer flex jcc'>
        <div
          className='btnForm'
          onClick={() => {
            deletePartner(idPartnerToUpdate)
          }}
        >
          Supprimer
        </div>
        <div className='btnForm blue' onClick={updatePartner}>
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
          <Alert severity='success'>Partenaire modifié avec succès</Alert>
        </Snackbar>
      </div>
    </div>
  )
}

export default AdminFormPartnerUpdate
