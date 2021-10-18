const AdminCardPole = ({
  id,
  name,
  deleteCard,
  modifyCardPole,
  img,
  setCreateForm,
  updateForm,
  setUpdateForm
}) => {
  return (
    <div
      className={`card flex jcc aic colorme`}
      id={id}
      onClick={() => modifyCardPole(id)}
      style={{
        backgroundImage: `url(http://localhost:4000/static/images/${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <button
        className='btnDeleteCard flex jcc aic'
        // onClick={() => deleteCard(id)}
        onClick={e => {
          e.stopPropagation()
          deleteCard(id)
        }}
      >
        x
      </button>
      <div className={`cardContent flex jcc aic`}>
        <div className='cardName'>
          <div className='title'>{name}</div>
        </div>
      </div>
    </div>
  )
}

export default AdminCardPole
