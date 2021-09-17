import { FaPhoneAlt, FaFacebook, FaInstagram } from 'react-icons/fa'

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

      <div className='contactInfoWrapper'>
        <div className='contactInfo'>
          <div className='contactInfoSocialLink'>
            <FaFacebook />
            <FaInstagram />
          </div>
          <div className='contactInfoText'>
            <h4>Notre adresse:</h4>
            <p>1 rue du chemin, 37150 Bléré</p>
          </div>
          <div className='contactInfoMap'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43290.87063345045!2d0.9497721319364254!3d47.301064166248516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcb7cda60eab81%3A0x2291fbc7d1074edc!2zMzcxNTAgQmzDqXLDqQ!5e0!3m2!1sfr!2sfr!4v1631862573373!5m2!1sfr!2sfr'
              width='100%'
              height='180%'
              allowFullScreen=''
              loading='lazy'
              title="Adress Boite d'acoté"
            ></iframe>
          </div>
          <div className='contactInfoSpace'></div>
        </div>
        <div className='contactMessage'>
          <h3>
            <span>Laissez nous un message</span>
          </h3>
          <form className='contactFrom'></form>
        </div>
      </div>
    </div>
  )
}

export default Contact
