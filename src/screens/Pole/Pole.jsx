import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

import './Pole.css'

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
  }, [])
  console.log('duck', poleData[0])

  return (
    <div className='pole-container'>
      <div className='banner'>{/* <img src={} alt='bannière' /> */}</div>
      {poleData.pole_desc}
    </div>
  )
}

export default Pole
