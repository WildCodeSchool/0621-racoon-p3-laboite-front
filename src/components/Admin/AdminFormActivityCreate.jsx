import React from 'react'

import ActivAdmin from '../../screens/Admin/ActivAdmin'
import ActivityAdmin from '../../screens/Admin/ActivityAdmin'
import FormActivity from './../../components/Form/FormActivity'

const AdminFormActivityCreate = ({
  adminInput,
  closeForm,
  onChangeHandler,
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
          resMessage={resMessage}
          setAdminInput={setAdminInput}
          setActivityImage={setActivityImage}
        />
        <ActivityAdmin />
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
