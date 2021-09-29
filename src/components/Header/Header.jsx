import Logo from '../../assets/logo-bac-blanc-no-bg.png'

import './Header.css'

const Header = () => {
  return (
    <div className='flex header'>
      <div className='flex header-logo'>
        <div className='header-logo-container'>
          <img src={Logo} alt='logo' />
        </div>
      </div>
      <div className='flex header-text'>
        <h1>La boîte d&apos;à côté...</h1>
        <h1 className='offset-right'>Une entreprise pas comme les autres !</h1>
      </div>
    </div>
  )
}

export default Header
