import './PartnerList.css'

const PartnerList = ({ partners }) => {
  return (
    <div className='partners'>
      <div className='partnersWrapper'>
        {partners.map((partner, index) => (
          <div key={index} className={`${partner} partnerbox`}>
            150 x 150 px
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerList
