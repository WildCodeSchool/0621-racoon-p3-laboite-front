import { FaPhoneAlt } from 'react-icons/fa'

import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactRubban'>
        <div className='contactPicto'>
          <FaPhoneAlt />
        </div>
        <h2 className='contactRubbanTitle'>Contact</h2>
      </div>

      <div className='contactInfo'></div>
    </div>
  )
}

export default Contact
