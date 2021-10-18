import './PartnerList.css'

const PartnerList = ({ partners }) => {
  return (
    <div className='partners'>
      <div className='partnersWrapper'>
        {partners.map((partner, index) => (
          <div key={index} className={`${partner.partner_name} partnerbox`}>
            <img
              src={`${process.env.REACT_APP_URL_API}/${partner.partner_img}`}
              alt={partner.partner_name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerList
