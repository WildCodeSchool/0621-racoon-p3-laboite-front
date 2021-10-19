import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'

import PartnerAdmin from '../../screens/Admin/AdminPartner/PartnerAdmin'

const AdminFormPartnerCreate = ({
  adminInput,
  closeForm,
  onChangeHandler,
  postPartner,
  resMessage,
  setAdminInput,
  setPartnerImage,
  addAlert
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Nouveau partenaire</div>
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
        <div className='btnForm' onClick={postPartner}>
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
              Partenaire ajouté avec succès
            </Alert>
          </Snackbar>
      </div>
    </div>
  )
}

export default AdminFormPartnerCreate
