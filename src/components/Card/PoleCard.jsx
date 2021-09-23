import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core'
import { faBoxOpen, faConciergeBell, faLeaf } from '@fortawesome/free-solid-svg-icons'


import './PoleCard.css'
import powers from '../../assets/mini-2.jpeg'

const PoleCard = ({id, pole_name, pole_picto}) => {
  console.log('poulet devant', id)
  return (
    <div className='polecard-container'>
      <img className='polecard-image' src={powers} alt={pole_name} />
      <div className='polecard-banner'>
        <div className='polecard-picto'>
          <FontAwesomeIcon icon={pole_picto}/>
        </div>
        <h3>{pole_name}</h3>
      </div>
    </div>
  )
}

export default PoleCard
