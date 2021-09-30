import './Admin.css'

const AdminCard = ({ elmt, index, displayForm, removeElement }) => {
  return (
    <div
      className={`card id${index + 1} flex jcc aic colorme`}
      onClick={displayForm}
    >
      <div className='btnDeleteCard flex jcc aic' onClick={removeElement}>
        x
      </div>
      <div className='test'>{elmt}</div>
    </div>
  )
}

export default AdminCard
