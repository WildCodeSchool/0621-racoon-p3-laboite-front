import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PoleCard from './PoleCard'

const PoleCardList = () => {
  const [poleOnline, setPoleOnline] = useState([])

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.post(`http://localhost:4000/pole`)
      console.log(results.data)
      setPoleOnline(results.data)
    }
    recupData()
  }, [])

  console.log(poleOnline)

  return (
    <>
      {poleOnline.map(card => (
        <PoleCard key={card.id} {...card} />
      ))}
    </>
  )
}

export default PoleCardList
