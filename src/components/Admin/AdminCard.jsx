const AdminCard = ({ id, name, updateElement,  deleteCard,
  modifyCard }) => {
  return (
    <div
      className={`card flex jcc aic colorme`}
      id={id}
      onClick={()=>modifyCard(id)}
    >
      <div className='btnDeleteCard flex jcc aic'>x</div>
      <div className={`cardContent flex jcc aic`}>
        {/* {img && <img src={img} />} */}
        <div className='cardName'>{name}</div>
      </div>
    </div>
  )
}

export default AdminCard
