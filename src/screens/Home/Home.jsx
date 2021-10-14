import axios from 'axios'
import Concept from '../../components/Concept/Concept'
import MemberCard from '../../components/Card/MemberCard'
import PoleCard from '../../components/Card/PoleCard'
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
        .get(`${process.env.REACT_APP_URL_API}/concept`)
        .then(res => setConcept(res.data[0]))
    }
    getConcept()
  }, [])

  useEffect(() => {
    const getTeam = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/members`)
        .then(res => setTeam(res.data))
    }
    getTeam()
  }, [])

  useEffect(() => {
    const getPole = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/poles`)
        .then(res => setPoleMin(res.data))
    }
    getPole()
  }, [])
  console.log(concept)
  return (
    <>
      <img
        className='banner'
        src={`${process.env.REACT_APP_URL_API}/static/images/${concept.concept_banner}`}
        alt='blere-beach'
      />
      <div className='centerContainer'>
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
              <span> Les pôles d&apos;activité </span>
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
              <span> L&apos;équipe </span>
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
