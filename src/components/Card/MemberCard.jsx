import './MemberCard.css'
import '../../screens/Home/Home.css'
import React from 'react'

const MemberCard = ({ member_img, member_name, member_role }) => {
  return (
    <div className='card-container'>
      <img className='member-img' src={`${process.env.REACT_APP_URL_API}/static/images/${member_img}`} alt={member_name} />
      <div className='card-desc'>
        <div className='member-title'>
          <h5>{member_name}</h5>
          <p>{member_role}</p>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
