const AdminForm = () => {
  const handleCloseClick = () => {
    console.log('click to close')
  }
  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={handleCloseClick}>
        x
      </div>
      <div className='bottomDivTitle'>Formulaire</div>
      <input className='boxInput' />
      <input className='boxInput' />
      <input className='boxInput' />
      <input className='boxInput' />
      <input className='boxInput' />
      <div className='btnContainer flex row aic'>
        <div className='btnForm'>Modifier</div>
        <div className='btnForm'>Sauvegarder</div>
      </div>
    </div>
  )
}

export default AdminForm
