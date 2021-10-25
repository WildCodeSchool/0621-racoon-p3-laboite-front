const AdminCardPole = ({ id, name, deleteCard, modifyCardPole, img }) => {
  return (
    <div
      className={`card flex jcc aic colorme`}
      id={id}
      onClick={() => modifyCardPole(id)}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_URL_API}/static/images/${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <button
        className='btnDeleteCard flex jcc aic'
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
