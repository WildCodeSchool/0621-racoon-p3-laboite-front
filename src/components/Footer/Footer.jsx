import { Link } from 'react-router'

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
          <Link to=''>Nous soutenir</Link>
          <Link to=''>L’Association et ses partenaires</Link>
          <Link to=''>Nous trouver</Link>
          <Link to=''>On parle de nous</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
