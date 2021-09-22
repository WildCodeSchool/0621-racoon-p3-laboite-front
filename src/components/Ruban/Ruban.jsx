import { FaPhoneAlt } from 'react-icons/fa'

import './Ruban.css'

const Ruban = picto => {
  return (
    <div className='ruban'>
      <div className='rubanPicto'>
        <FaPhoneAlt />
      </div>
      <h2 className='rubanTitle'>Contact</h2>
    </div>
  )
}

export default Ruban
