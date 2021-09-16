import { Link } from 'react-router-dom'

import { FaFacebook, FaInstagram } from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerWrapper'>
        <div className='footerSocial'>
          <FaFacebook />
          <FaInstagram />
        </div>
        <div className='footerLink'>
          <a href='#'>Nous soutenir</a>
          <div className='footerSeparator'></div>
          <a href='#'>L’Association et ses partenaires</a>
          <div className='footerSeparator'></div>
          <a href='#'>Nous trouver</a>
          <div className='footerSeparator'></div>
          <a href='#'>On parle de nous</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
