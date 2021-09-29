import { useEffect, useState } from 'react'
import axios from 'axios'
import Map from './Map'
import RibbonTitle from '../../components/RibbonTitle/RibbonTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import './Contact.css'

const Contact = () => {
<<<<<<< HEAD
=======
  // Infos à mettre dans le back
  const contactTitle = 'Contact'
  const contactPicto = 'phone-alt'
>>>>>>> 56c4c675a4ba7e8c9a55808d607b4b339bd8277a
  // Infos de contact de la Boite d'acoté
  const [contact, setContact] = useState('')
  const [social, setSocial] = useState([])

  // Recupere les infos contact du back et bdd
  useEffect(() => {
    const getInfo = () => {
      console.log(`${process.env.REACT_APP_URL_API}/contact`)
      axios
        .get(`${process.env.REACT_APP_URL_API}/contact`)
        .then(
          response => console.table(response.data) || setContact(response.data)
        )

      axios
        .get(`${process.env.REACT_APP_URL_API}/social`)
        .then(
          response => console.table(response.data) || setSocial(response.data)
        )
    }
    getInfo()
  }, [])

  return (
    <div className='contact centerContainer'>
<<<<<<< HEAD
      <RibbonTitle picto={'phone-alt'} title={'Contact'} />
=======
      <RibbonTitle picto={contactPicto} title={contactTitle} />
>>>>>>> 56c4c675a4ba7e8c9a55808d607b4b339bd8277a
      <div className='contactInfoWrapper'>
        <div className='contactInfo'>
          <div className='contactInfoContent'>
            <div className='contactInfoItems'>
              <div className='contactInfoSocialLink'>
                {social.map(link => (
                  <a
                    href={link.social_link}
                    target='_blank'
                    rel='noreferrer'
                    key={link.id}
                  >
                    <img src={link.social_icon} alt='social icon' />
                  </a>
                ))}
              </div>
              <div className='contactInfoText'>
                <h4>Notre adresse:</h4>
                <p className='contactInfoTextAdress'>
                  {contact.contact_address}
                </p>
                <div className='contactInfoTextPhone'>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <p>{contact.contact_phone}</p>
                </div>
              </div>
            </div>
            <div className='contactMap'>
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
