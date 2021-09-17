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
          <h1 style={{ paddingLeft: '150px' }}>
            Une entreprise pas comme les autres !
          </h1>
        </div>
      </div>
      <div className='flex navlist'>
        <div>
          <p style={{ color: '#EB5160' }}>N</p>
        </div>
        <div>
          <p>Le Concept</p>
        </div>
        <div>
          <p>Pôle Conciergerie</p>
        </div>
        <div>
          <p>Pôle Recyclerie Créative</p>
        </div>
        <div>
          <p>Pôle Végétal</p>
        </div>
        <div>
          <p style={{ color: '#EB5160' }}>N</p>
        </div>
      </div>
      <div className='blere-beach'></div>
    </div>
  )
}

export default Header
