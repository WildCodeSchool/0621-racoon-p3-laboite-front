import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import '../Ruban/Ruban.css'
import './RubanPole.css'

const RubanPole = ({ picto, title }) => {
  const iconList = Object.keys(Icons)
    .filter(key => key !== 'fas' && key !== 'prefix')
    .map(icon => Icons[icon])
  library.add(...iconList)
  return (
    <div className='ruban'>
      <div className='rubanPicto pole'>
        <FontAwesomeIcon icon={picto} />
      </div>
      <h2 className='rubanTitle'>{title}</h2>
    </div>
  )
}

export default RubanPole
