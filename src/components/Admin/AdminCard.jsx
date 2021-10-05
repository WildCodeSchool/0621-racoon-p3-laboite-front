const AdminCard = ({ elmt, id, img, displayForm, removeElement }) => {
  return (
    <div className={`card flex jcc aic colorme`}>
      <div className='btnDeleteCard flex jcc aic' onClick={removeElement}>
        x
      </div>
      <div className={`cardContent id${id} flex jcc aic`} onClick={displayForm}>
        {/* {img && <img src={img} />} */}
        <div className={`id${id}`}>{elmt}</div>
      </div>
    </div>
  )
}

export default AdminCard
