import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

import './Pole.css'
import Ruban from './../../components/Ruban/Ruban';

const Pole = () => {
  const [poleData, setPoleData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4000/pole/${id}`)
      console.log(results.data)
      setPoleData(results.data)
    }
    recupData()
  }, [id])
  console.log('duck', poleData)

  return (
    <div className='pole-container'>
      <div className='banner'>
        <img src={poleData.pole_banner} /></div>
      <div>
        <Ruban picto={poleData.pole_picto} title={poleData.pole_title}/>
      </div>
      {poleData.pole_desc}
    </div>
  )
}

export default Pole
