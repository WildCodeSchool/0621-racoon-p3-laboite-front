import React from 'react'

import ruban from '../../assets/rubanHome.png'

import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import MemberCard from '../../components/Card/MemberCard'
import PoleCard from '../../components/Card/PoleCard'

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
      axios
      .get('http://localhost:4000/pole')
      .then(res => setPoleMin(res.data))
    }
    getPole()
  }, [])

  console.log(poleMin)

  return (
    <>
      <div className='homeContainer'>
        <img
          style={{ width: '100%', height: '400px', marginBottom: '50px' }}
          src={concept.concept_banner}
          alt='blere-beach'
        />
        <img src={ruban} alt='ruban' style={{ paddingBottom: '50px' }} />
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

        <div className='conceptContainer'>
          <div className='titleContainer'>
            <h2 className='conceptTitle'>
              <span>Le Concept</span>
            </h2>
          </div>
          <div className='conceptPart'>
            <div className='part1'>
              <img
                src={concept.concept_img1}
                alt='jardinerie'
                style={{ width: '50%', height: '50vh' }}
              />
              <div className='conceptP1'>
                <p>{concept.concept_txt1_p1}</p>
                <p style={{ textDecoration: 'underline', fontStyle: 'italic' }}>
                  {concept.link_tzc}
                </p>
                <p>{concept.concept_txt1_p2}</p>
                <div className='block-buster'>
                  <div className='borderText'></div>
                  <p className='borderP'>{concept.concept_txt1_p3}</p>
                </div>
              </div>
            </div>
            <div className='part2'>
              <div className='conceptP2'>
                <div className='block-buster'>
                  <div className='borderText'></div>
                  <p className='borderP'>{concept.concept_txt2_p1}</p>
                </div>
                <div className='block-buster'>
                  <div className='borderText'></div>
                  <p className='borderP'>{concept.concept_txt2_p2}</p>
                </div>
                <p style={{ fontWeight: 'bold' }}>{concept.concept_txt2_p3}</p>
              </div>
              <img
                src={concept.concept_img2}
                alt='vendange'
                style={{ width: '50%', height: '50vh' }}
              />
            </div>
            <div className='part3'>
              <img
                src={concept.concept_img3}
                alt='livraison'
                style={{ width: '50%', height: '50vh' }}
              />
              <div className='conceptP3'>
                <p className='borderP'>{concept.concept_txt3_p1}</p>
                <p style={{ fontStyle: 'italic' }} className='borderP'>
                  {concept.concept_txt3_p3}
                </p>
                <p className='borderP'>{concept.concept_txt3_p2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='poles'>
          <div className='poleTitleContainer'>
            <h2 className='poleTitle'>
              <span> Les pôles d'activité </span>
            </h2>
          </div>
          <div className='polesContainer'>
            {poleMin.map((card) => (
              <PoleCard key={card.id} {...card} poleMin={poleMin} />
            ))}
            {/* <img className='imgPoles' src={Austin} alt='powers' />
            <img className='imgPoles' src={DrEvil} alt='powers' />
            <img className='imgPoles' src={Power} alt='powers' /> */}
          </div>
        </div>
        <div className='teamContainer'>
          <div className='teamTitleContainer'>
            <h2 className='teamTitle'>
              <span> L'équipe </span>
            </h2>
          </div>
          <div className='membersContainer'>
            {team.map((member) => (
            <MemberCard key={member.id} {...member} team={team} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
