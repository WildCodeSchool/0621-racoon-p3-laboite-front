import { FaPhoneAlt } from 'react-icons/fa'

import './Ruban.css'

const Ruban = picto => {
  return (
    <div className='ruban'>
      <div className='rubanPicto'>
        <FaPhoneAlt />
      </div>
      <h1 className='rubanTitle'>Contact</h1>
    </div>
  )
}

export default Ruban
