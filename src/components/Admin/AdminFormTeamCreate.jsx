import React from 'react'

import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeamCreate = ({
  adminInput,
  closeForm,
  onChangeHandler,
  postMember,
  refresh,
  resMessage,
  setAdminInput,
  setRefresh,
  setResMessage
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
          refresh={refresh}
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setRefresh={setRefresh}
          setResMessage={setResMessage}
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
