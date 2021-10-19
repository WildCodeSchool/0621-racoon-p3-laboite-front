import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'

import PartnerAdmin from '../../screens/Admin/AdminPartner/PartnerAdmin'

const AdminFormPartnerUpdate = ({
  adminInput,
  closeForm,
  deletePartner,
  onChangeHandler,
  resMessage,
  setAdminInput,
  setPartnerImage,
  updatePartner,
  openUpdate,
  handleClose
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour le partenaire</div>
      <div className='partnerFormContainer'>
        <PartnerAdmin
          adminInput={adminInput}
          onChangeHandler={onChangeHandler}
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setPartnerImage={setPartnerImage}
        />
      </div>
      <div className='btnContainer flex jcc'>
        <div
          className='btnForm'
          onClick={e => {
            if (
              window.confirm(
                'Etes-vous sûr(e) de vouloir supprimer ce partenaire ?'
              )
            )
              deletePartner(e)
          }}
        >
          Supprimer
        </div>
        <div className='btnForm blue' onClick={updatePartner}>
          Publier
        </div>
        <Snackbar
            open={openUpdate}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Alert onClose={handleClose} severity='success'>
              Partenaire modifié avec succès
            </Alert>
          </Snackbar>
      </div>
    </div>
  )
}

export default AdminFormPartnerUpdate
