import { NavLink } from 'react-router-dom'
import './PoleCard.css'

const PoleCard = ({ id, pole_miniature_img, pole_name }) => {
  const poleId = `/pole/${id}`

  return (
    <>
      <div className='pole-card'>
        <NavLink to={poleId}>
          <img src={pole_miniature_img} alt={pole_name} />
        </NavLink>
      </div>
    </>
  )
}

export default PoleCard
