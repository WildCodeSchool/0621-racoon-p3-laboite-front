import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeamCreate = ({
  refresh,
  setRefresh,
  resMessage,
  setResMessage,
  closeForm,
  postMember,
  onChangeHandler,
  adminInput,
  setAdminInput
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Nouveau membre</div>
      <div className='teamFormContainer'>
        <TeamAdmin
          refresh={refresh}
          setRefresh={setRefresh}
          resMessage={resMessage}
          setResMessage={setResMessage}
          onChangeHandler={onChangeHandler}
          adminInput={adminInput}
          setAdminInput={setAdminInput}
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
