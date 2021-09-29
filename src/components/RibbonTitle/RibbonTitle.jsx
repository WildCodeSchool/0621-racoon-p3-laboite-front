import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as SolidIcons from '@fortawesome/free-solid-svg-icons'
import * as RegularIcons from '@fortawesome/free-regular-svg-icons'
import * as BrandsIcons from '@fortawesome/free-brands-svg-icons'

import './RibbonTitle.css'

// Component
const RibbonTitle = ({ title, picto }) => {
  //const pictoList = [default, leaf, concierge-bell, leaf, box-open, hands-helping, phone-alt] //... cart-arrow-down || cart-shopping (shopping-cart), person-biking (biking), star-half-stroke, triangle-exclamation(exclamation-triangle)

  // Import any solid icon from Fontawesome
  const iconListSolid = Object.keys(SolidIcons)
    .filter(key => key !== 'fas' && key !== 'prefix')
    .map(icon => SolidIcons[icon])
  // Import any regular icon from Fontawesome
  const iconListRegular = Object.keys(RegularIcons)
    .filter(key => key !== 'far' && key !== 'prefix')
    .map(icon => RegularIcons[icon])
  // Import any brands icon from Fontawesome
  const iconListBrands = Object.keys(BrandsIcons)
    .filter(key => key !== 'fab' && key !== 'prefix')
    .map(icon => BrandsIcons[icon])
  // Add results to library
  library.add(...iconListSolid, ...iconListRegular, ...iconListBrands)

  return (
    <div className='ribbon'>
      <div className='ribbonPicto'>
        <FontAwesomeIcon icon={`${picto}`} />
      </div>
      <h2 className='ribbonText'>{title}</h2>
    </div>
  )
}

export default RibbonTitle
