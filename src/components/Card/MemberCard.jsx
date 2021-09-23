import './MemberCard.css'
import React from 'react'

const MemberCard = team => {
  return (
    <div className='card-container'>
      <img className='member-img' src={team.member_img} alt={team.member_name}/>
      <div className='card-desc'>
        <div className='member-title'>
          <h3>{team.member_name}</h3>
          <p>{team.member_role}</p>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
