import PoleCardList from './PoleCardList'

const PoleAdmin = () => {
  return (
    <div className='admin-container'>
      <div className='admin-header'>
        <PoleCardList />
        {/* close admin button */}
        <button> X </button>
      </div>
    </div>
  )
}

export default PoleAdmin
