import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeamUpdate = ({
  member,
  refresh,
  setRefresh,
  resMessage,
  setResMessage,
  deleteMember,
  closeForm,
  onChangeHandler,
  adminInput
}) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour le membre</div>
      <div className='teamFormContainer'>
        <TeamAdmin
          member={member}
          refresh={refresh}
          setRefresh={setRefresh}
          resMessage={resMessage}
          setResMessage={setResMessage}
          onChangeHandler={onChangeHandler}
          adminInput={adminInput}
        />
      </div>
      <div className='btnContainer flex jcc'>
        <div
          className='btnForm'
          onClick={e => {
            if (
              window.confirm(
                'Etes-vous sûr(e) de vouloir supprimer ce membre ?'
              )
            )
              deleteMember(e)
          }}
        >
          Supprimer
        </div>
        <div className='btnForm blue'>Sauvegarder</div>
      </div>
    </div>
  )
}

export default AdminFormTeamUpdate
