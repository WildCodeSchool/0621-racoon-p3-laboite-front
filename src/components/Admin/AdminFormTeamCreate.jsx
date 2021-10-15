import React from 'react'

import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeamCreate = ({
  adminInput,
  closeForm,
  onChangeHandler,
  postMember,
  resMessage,
  setAdminInput,
  setMemberImage
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
      </div>
    </div>
  )
}

export default AdminFormTeamCreate
