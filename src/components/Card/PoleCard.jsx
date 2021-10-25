import * as Icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { NavLink } from 'react-router-dom'

import './PoleCard.css'
import '../../screens/Home/Home.css'

const PoleCard = ({
  id,
  pole_title,
  pole_picto,
  pole_catchphrase,
  pole_miniature_img
}) => {
  const iconList = Object.keys(Icons)
    .filter(key => key !== 'fas' && key !== 'prefix')
    .map(icon => Icons[icon])

  library.add(...iconList)

  return (
    <div className='polecard-container'>
      <img
        className='polecard-image'
        src={`${process.env.REACT_APP_URL_API}/static/images/${pole_miniature_img}`}
        alt={pole_title}
      />
      <NavLink to={`/poles/${id}`}>
        <div className='polecard-banner'>
          <div className='picto-container'>
            <div className='polecard-picto'>
              <FontAwesomeIcon icon={pole_picto} />
            </div>
          </div>
          <h3>{pole_title}</h3>
          <div className='catchPhrase'>{pole_catchphrase}</div>
        </div>
      </NavLink>
    </div>
  )
}

export default PoleCard
