import React from 'react'

import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormPartnerUpdate = ({
  adminInput,
  closeForm,
  deletePartner,
  onChangeHandler,
  resMessage,
  setAdminInput,
  setPartnerImage,
  updatePartner
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour le partenaire</div>
      <div className='teamFormContainer'>
        <TeamAdmin
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
      </div>
    </div>
  )
}

export default AdminFormPartnerUpdate
