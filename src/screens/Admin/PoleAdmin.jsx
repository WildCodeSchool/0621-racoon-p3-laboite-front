import PoleCardList from './PoleCardList'
import PoleFormPut from './PoleFormPut'

const PoleAdmin = () => {
  return (
    <div className='admin-container'>
      <div className='admin-header'>
        {/* close admin button */}
        <button> close </button>
      </div>
      <PoleCardList />
      <h3>Nouvelle page pôle</h3>
      {/* show or hide form button */}
      <button> + </button>
      <PoleFormPut />
    </div>
  )
}

export default PoleAdmin
