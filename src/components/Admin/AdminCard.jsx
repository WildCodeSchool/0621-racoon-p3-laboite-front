const AdminCard = ({ id, name, updateElement, deleteCard }) => {
  return (
    <div
      className={`card flex jcc aic colorme`}
      id={id}
      onClick={updateElement}
    >
      <div className='btnDeleteCard flex jcc aic' id={id} onClick={deleteCard}>
        x
      </div>
      <div className={`cardContent flex jcc aic`}>
        {/* {img && <img src={img} />} */}
        <div className='cardName'>{name}</div>
      </div>
    </div>
  )
}

export default AdminCard
