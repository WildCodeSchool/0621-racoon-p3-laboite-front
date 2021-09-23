import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

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
      <div className='banner'>{/* <img src={} alt='bannière' /> */}</div>
      {poleData.pole_desc}
    </div>
  )
}

export default Pole
