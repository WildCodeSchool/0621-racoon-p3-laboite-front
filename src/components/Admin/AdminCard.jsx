const AdminCard = ({ elmt, id, displayForm, removeElement }) => {
  return (
    <div className={`card flex jcc aic colorme`}>
      <div className='btnDeleteCard flex jcc aic' onClick={removeElement}>
        x
      </div>
      <div className={`cardContent id${id} flex jcc aic`} onClick={displayForm}>
        <div className={`id${id}`}>{elmt}</div>
      </div>
    </div>
  )
}

export default AdminCard
