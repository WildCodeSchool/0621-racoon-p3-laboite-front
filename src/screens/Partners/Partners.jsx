import BlockFunction from './BlockFunction'
import BlockMission from './BlockMission'
import BlockPartners from './BlockPartners'
import Ruban from '../../components/Ruban/Ruban'

import './Partners.css'

const Partners = () => {
  const partnerTitle = "L'association et ses partenaires"
  const partnerPicto = "hands-helping"
  return (
    <div className='partners dispFlex width100'>
      <Ruban title={partnerTitle} picto={partnerPicto} />
      <BlockMission />
      <BlockFunction />
      {/* <div className='services'></div> */}
      <BlockPartners />
      <div className='give'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quis consequuntur magnam corrupti quibusdam excepturi voluptatibus
          dignissimos maiores laboriosam aliquid vel reprehenderit nesciunt,
          magni assumenda
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
      </div>
      <div className='contactBlock'>Contact</div>
      <div className='thanks'>Merci</div>
    </div>
  )
}

export default Partners
