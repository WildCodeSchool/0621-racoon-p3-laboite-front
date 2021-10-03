import { useState } from 'react'
import PoleCardList from './PoleCardList'
import PoleFormPost from './PoleFormPost'

const PoleAdmin = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className='admin-container'>
      <div className='admin-header'>
        <PoleCardList />
        {/* close admin button */}
        <button> X </button>
      </div>

      <h3>Nouvelle page pôle</h3>
      {/* show or hide form button */}
      <button> + </button>
      <PoleFormPost />
    </div>
  )
}

export default PoleAdmin
