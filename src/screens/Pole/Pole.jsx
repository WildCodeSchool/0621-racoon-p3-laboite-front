import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

import ActivitiesPole from '../../components/ActivitiesPole/ActivitiesPole'
import BottomCenter from '../../components/BottomCenter/BottomCenter'
import FuncPole from '../../components/FuncPole/FuncPole'
import RubanPole from './../../components/RubanPole/RubanPole'
import TopCenter from './../../components/TopCenter/TopCenter'
import './Pole.css'

const Pole = () => {
  const [poleData, setPoleData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    console.log(id)
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4000/pole/${id}`)

      setPoleData(results.data)
    }
    recupData()
  }, [id])
  console.log('duck', poleData)

  return (
    <div className='pole-container'>
      <div className='banner'>
        <img src={poleData.pole_banner} />
      </div>
      <div>
        <RubanPole picto={poleData.pole_picto} title={poleData.pole_title} />
      </div>
      <TopCenter {...poleData} />

      <FuncPole {...poleData} />
      <ActivitiesPole {...poleData.activities} />
      <BottomCenter />
    </div>
  )
}

export default Pole
