import './PoleCard.css'

const PoleCard = ( poleMin ) => {
  return ( 
    <div className='polecard-container'>
      <img src={poleMin.pole_banner} alt={poleMin.pole_name} />
      <div className='polecard-banner'>
        <div className='polecard-picto'>
          {poleMin.pole_picto}
        </div>
        <h3>{poleMin.pole_name}</h3>
      </div>
    </div>
  );
}

export default PoleCard;