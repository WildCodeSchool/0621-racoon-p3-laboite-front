import './PartnerList.css'

const PartnerList = ({ partners }) => {
  return (
    <div className='partners'>
      <div className='partnersWrapper'>
        {partners.map((partner, index) => (
          <div key={index} className={`${partner} partnerbox`}>
            <img
              src={`${process.env.REACT_APP_URL_API}/${partner}`}
              alt={partner}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerList
