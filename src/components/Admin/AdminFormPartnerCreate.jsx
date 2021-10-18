import React from 'react'

import PartnerAdmin from '../../screens/Admin/PartnerAdmin'

const AdminFormPartnerCreate = ({
  adminInput,
  closeForm,
  onChangeHandler,
  postPartner,
  resMessage,
  setAdminInput,
  setPartnerImage
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
      </div>
    </div>
  )
}

export default AdminFormPartnerCreate
