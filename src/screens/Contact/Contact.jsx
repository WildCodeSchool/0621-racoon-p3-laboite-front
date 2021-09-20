import { useEffect, useState } from 'react'
import axios from 'axios'

import { FaPhoneAlt, FaFacebook, FaInstagram } from 'react-icons/fa'

import './Contact.css'
import SimpleMap from './Map'

const Contact = () => {
  // Infos de contact de la Boite d'acoté
  const [contact, setContact] = useState([])

  // Recupere les infos contact du back et bdd
  useEffect(() => {
    const getInfo = () => {
      axios
        .get('http://localhost:4000/contact')
        .then(
          response => console.table(response.data) || setContact(response.data)
        )
    }
    getInfo()
  }, [])

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
          <div className='contactInfoContent'>
            <div className='contactInfoSocialLink'>
              {contact.map(link => (
                <a
                  href={link.contact_social_link}
                  target='_blank'
                  rel='noreferrer'
                  key={link.id}
                >
                  <FaFacebook />
                </a>
              ))}
            </div>
            <div className='contactInfoText'>
              <h4>Notre adresse:</h4>
              <p>{contact[0].contact_address}</p>
              <p>
                <FaPhoneAlt /> {contact[0].contact_phone}
              </p>
            </div>
            <div className='contactInfoMap'>
              {/* <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43290.87063345045!2d0.9497721319364254!3d47.301064166248516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcb7cda60eab81%3A0x2291fbc7d1074edc!2zMzcxNTAgQmzDqXLDqQ!5e0!3m2!1sfr!2sfr!4v1631862573373!5m2!1sfr!2sfr'
                width='130%'
                height='180%'
                allowFullScreen=''
                loading='lazy'
                title="Adress Boite d'acoté"
              ></iframe> */}
              {/* <SimpleMap /> */}
            </div>
          </div>
        </div>
        <div className='contactMessage'>
          <h3>
            <span>Laissez nous un message</span>
          </h3>
          <form className='contactFrom'>
            <div className='contactFromItems'>
              <label htmlFor='name'>Nom:</label>
              <input id='name' name='name' type='text' require='true' />
            </div>
            <div className='contactFromItems'>
              <label htmlFor='email'>Email:</label>
              <input id='email' name='email' type='email' require='true' />
            </div>
            <div className='contactFromItems'>
              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message' require='true'></textarea>
            </div>
            <button type='submit'>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
