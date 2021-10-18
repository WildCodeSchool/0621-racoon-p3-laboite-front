import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import Map from './Map'
import RibbonTitle from '../../components/RibbonTitle/RibbonTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import './Contact.css'

const Contact = () => {
  // Infos de contact de la Boite d'acoté
  const [contact, setContact] = useState('')
  const [social, setSocial] = useState([])

  // Donnée formulaire
  const [formData, setFormData] = useState({})
  const [message, setMessage] = useState('')

  //------------------------------------------------------------------------------

  // Recupere les infos contact du back et bdd
  useEffect(() => {
    const getInfo = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/contact`)
        .then(response => setContact(response.data))

      axios
        .get(`${process.env.REACT_APP_URL_API}/social`)
        .then(response => setSocial(response.data))
    }
    getInfo()
  }, [])

  //-----------------------------------------------------------------

  // Envoi les données du formulaire de contact a nodemailer
  const sendMail = () => {
    console.log('formData', formData)
    axios
      .post(`${process.env.REACT_APP_URL_API}/contact/sendmail`, formData)
      .then(response => setMessage(response.data))
  }

  //----------------------------------------------------------------------------------------

  // Add les données des input dans FormData
  const onChangeHandler = useCallback(({ target: { name, value } }) =>
    setFormData(state => ({ ...state, [name]: value }), [])
  )

  return (
    <div className='contact centerContainer'>
      <RibbonTitle picto={'phone-alt'} title={'Contact'} />
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
                    <img
                      src={`${process.env.REACT_APP_URL_API}/static/images/${link.social_icon}`}
                      alt='social icon'
                    />
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
            <span className='contactMessageTitle'>Laissez nous un message</span>
          </h3>
          <form
            className='contactFrom'
            onSubmit={e => {
              e.preventDefault()
              sendMail()
            }}
          >
            <div className='contactFromItems'>
              <label htmlFor='name'>Nom:</label>
              <input
                id='name'
                name='name'
                type='text'
                require='true'
                onChange={onChangeHandler}
              />
            </div>
            <div className='contactFromItems'>
              <label htmlFor='email'>Email:</label>
              <input
                id='email'
                name='email'
                type='email'
                require='true'
                onChange={onChangeHandler}
              />
            </div>
            <div className='contactFromItems'>
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                require='true'
                onChange={onChangeHandler}
              ></textarea>
            </div>
            <span className='formMessage'>{message && message}</span>
            <button type='submit'>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
