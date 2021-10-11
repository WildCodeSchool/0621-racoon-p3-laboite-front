const AdminTopDiv = ({ elmt, addElement }) => {
  return (
    <div className='topDivTitle'>
      <p>Listes des {elmt} déjà en ligne</p>
      <div className='addButton flex row jcc aic' onClick={addElement}>
        <div>Nouvel élément</div>
        <div className='plusBtn flex jcc aic'>+</div>
      </div>
    </div>
  )
}

export default AdminTopDiv
