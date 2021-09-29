import { useEffect, useState } from 'react'
import axios from 'axios'
import Map from './Map'
import RibbonTitle from '../../components/RibbonTitle/RibbonTitle'
import { FaPhoneAlt, FaFacebook } from 'react-icons/fa'

import './Contact.css'

const Contact = () => {
  // Infos de contact de la Boite d'acoté
  const [contact, setContact] = useState('')
  const [social, setSocial] = useState([])

  // Recupere les infos contact du back et bdd
  useEffect(() => {
    const getInfo = () => {
      axios
        .get('http://localhost:4000/contact')
        .then(
          response => console.table(response.data) || setContact(response.data)
        )

      axios
        .get('http://localhost:4000/social')
        .then(
          response => console.table(response.data) || setSocial(response.data)
        )
    }
    getInfo()
  }, [])

  return (
    <div className='contact'>
      <RibbonTitle picto={''} text={''}/>
      <div className='contactInfoWrapper'>
        <div className='contactInfo'>
          <div className='contactInfoContent'>
            <div className='contactInfoSocialLink'>
              {social.map(link => (
                <a
                  href={link.social_link}
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
              <p>{contact.contact_address}</p>
              <p>
                <FaPhoneAlt /> {contact.contact_phone}
              </p>
            </div>
            <div className='contactInfoMap'>
              <Map />
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
