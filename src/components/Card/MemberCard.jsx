import './MemberCard.css'
import React from 'react'

const MemberCard = ({ member_img, member_name, member_role }) => {
  return (
    <div className='card-container'>
      <img className='member-img' src={member_img} alt={member_name}/>
      <div className='card-desc'>
        <div className='member-title'>
          <h3>{member_name}</h3>
          <p>{member_role}</p>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
