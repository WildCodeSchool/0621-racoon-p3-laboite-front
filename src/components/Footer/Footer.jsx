import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Footer.css'

const Footer = () => {
  const [social, setSocial] = useState([])

  useEffect(() => {
    const getInfo = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/social`)
        .then(response => setSocial(response.data))
    }
    getInfo()
  }, [])

  return (
    <footer className='footer'>
      <div className='footerSocial'>
        {social.map(link => (
          <a
            href={link.social_link}
            target='_blank'
            rel='noreferrer'
            key={link.id}
          >
            <img src={`${process.env.REACT_APP_URL_API}/static/images/${link.social_icon_alt}`} alt='social icon' />
          </a>
        ))}
      </div>
      <div className='footerLink'>
        <Link to=''>Nous soutenir</Link>
        <div className='footerSeparator'></div>
        <Link to='/partenaires'>L’Association et ses partenaires</Link>
        <div className='footerSeparator'></div>
        <Link to='/contact'>Nous trouver</Link>
        <div className='footerSeparator'></div>
        <Link to=''>On parle de nous</Link>
      </div>
    </footer>
  )
}

export default Footer
