import TeamAdmin from '../../screens/Admin/TeamAdmin'

const AdminFormTeam = () => {
  const handleCloseClick = () => {
    console.log('click to close')
  }
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={handleCloseClick}>
        x
      </div>
      <div className='bottomDivTitle'>Formulaire</div>
      <div className='teamFormContainer'>
        <TeamAdmin />
      </div>
      <div className='btnContainer flex jcc'>
        <div className='btnForm'>Modifier</div>
        <div className='btnForm'>Sauvegarder</div>
      </div>
    </div>
  )
}

export default AdminFormTeam
