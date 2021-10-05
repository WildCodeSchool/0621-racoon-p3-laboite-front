import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeamCreate = ({ refresh, setRefresh, closeForm }) => {
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Nouveau membre</div>
      <div className='teamFormContainer'>
        <TeamAdmin refresh={refresh} setRefresh={setRefresh} />
      </div>
      <div className='btnContainer flex jcc'>
        <div className='btnForm'>Publier</div>
      </div>
    </div>
  )
}

export default AdminFormTeamCreate
