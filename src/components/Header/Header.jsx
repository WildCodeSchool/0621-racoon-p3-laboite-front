import './Header.css'
import Logo from '../../assets/logo-bac-blanc-no-bg.png'

const Header = () => {
  return (
    <div className='flex header'>
      <div className='flex logo-container'>
        <div className='header-logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='header-text'>
          <h1>La boîte d'à côté...</h1>
          <h1 style={{ paddingLeft: '60px' }}>
            Une entreprise pas comme les autres !
          </h1>
        </div>
      </div>
      <div className='navbar'>
        <ul className='flex navlist'>
          <li>Le Concept</li>
          <li>Pôle Conciergerie</li>
          <li>Pôle Recyclerie Créative</li>
          <li>Pôle Végétal</li>
        </ul>
      </div>
      <div className='blere-beach'></div>
    </div>
  )
}

export default Header
