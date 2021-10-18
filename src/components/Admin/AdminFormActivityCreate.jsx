import React from 'react'

import ActivAdmin from '../../screens/Admin/ActivAdmin'

const AdminFormActivityCreate = ({
  adminInput,
  closeForm,
  onChangeHandler,
  poles,
  postActivity,
  resMessage,
  setAdminInput,
  setActivityImage
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Nouvelle activité</div>
      <div className='teamFormContainer'>
        <ActivAdmin
          adminInput={adminInput}
          onChangeHandler={onChangeHandler}
          poles={poles}
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setActivityImage={setActivityImage}
        />
      </div>
      <div className='btnContainer flex jcc'>
        <div className='btnForm' onClick={postActivity}>
          Publier
        </div>
      </div>
    </div>
  )
}

export default AdminFormActivityCreate
