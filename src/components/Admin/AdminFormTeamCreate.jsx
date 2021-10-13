import React from 'react'

import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeamCreate = ({
  closeForm,
  onChangeHandler,
  postMember,
  resMessage,
  setMemberImage
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Nouveau membre</div>
      <div className='teamFormContainer'>
        <TeamAdmin onChangeHandler={onChangeHandler} resMessage={resMessage} setMemberImage={setMemberImage} />
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
