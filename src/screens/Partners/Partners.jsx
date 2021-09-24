import BlockFunction from './BlockFunction'
import BlockMission from './BlockMission'
import BlockPartners from './BlockPartners'

import './Partners.css'

const Partners = () => {
  return (
    <div className='partners dispFlex width100'>
      <div className='ribbon'>L'association et ses partenaires</div>
      <BlockMission />
      <BlockFunction />
      {/* <div className='services'></div> */}
      <BlockPartners />
      <div className='give'>
        S
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
