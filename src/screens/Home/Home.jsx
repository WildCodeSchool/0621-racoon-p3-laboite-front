import axios from 'axios'
import Concept from '../../components/Concept/Concept'
import MemberCard from '../../components/Card/MemberCard'
import PoleCard from '../../components/Card/PoleCard'
import React from 'react'
import RubanConcept from '../../components/Ruban/RubanConcept/RubanConcept'
import { useState, useEffect } from 'react'

import '../../App.css'
import './Home.css'


const Home = () => {
  const [concept, setConcept] = useState([])
  const [team, setTeam] = useState([])
  const [poleMin, setPoleMin] = useState([])
  useEffect(() => {
    const getConcept = () => {
      axios
        .get('http://localhost:4000/concept')
        .then(res => setConcept(res.data[0]))
    }
    getConcept()
  }, [])

  useEffect(() => {
    const getTeam = () => {
      axios.get('http://localhost:4000/team').then(res => setTeam(res.data))
    }
    getTeam()
  }, [])

  useEffect(() => {
    const getPole = () => {
      axios.get('http://localhost:4000/pole').then(res => setPoleMin(res.data))
    }
    getPole()
  }, [])

  return (
    <>
        <img className='banner'
          src={concept.concept_banner}
          alt='blere-beach'
        />
      <div className='centerContainer'>
        {/* <img src={ruban} alt='ruban' style={{ paddingBottom: '50px' }} /> */}
        <RubanConcept />
        <div className='descContainer'>
          <div>
            <p className='ebeDesc'>{concept.pres_ebe_desc}</p>
            <p className='ebeDesc'>{concept.pres_ebe_desc2}</p>
          </div>
          <div className='homeContactContainer'>
            <p className='contactElements'>phone number</p>
            <p className='contactElements'>adress</p>
            <p className='contactElements'>mail</p>
          </div>
          <p>{concept.concept_openhours}</p>
        </div>

        <Concept concept={concept} />

        <div className='poles'>
          <div className='poleTitleContainer'>
            <h5 className='poleTitle'>
              <span> Les pôles d'activité </span>
            </h5>
          </div>
          <div className='polesContainer'>
            {poleMin.map(card => (
              <PoleCard key={card.id} {...card} />
            ))}
          </div>
        </div>
        <div className='teamContainer'>
          <div className='teamTitleContainer'>
            <h2 className='teamTitle'>
              <span> L'équipe </span>
            </h2>
          </div>
          <div className='membersContainer'>
            {team.map(member => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
