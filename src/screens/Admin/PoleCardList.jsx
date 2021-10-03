import axios from 'axios'
import { useEffect, useState } from 'react'
import PoleCardAdmin from './PoleCardAdmin'

const PoleCardList = () => {
  const [poleCards, setPoleCards] = useState([])

  useEffect(() => {
    const PoleData = async () => {
      const results = await axios.get(`http://localhost:4000/pole`)
      setPoleCards(results.data)
    }
    PoleData()
  }, [])

  const clickCard = id => {
    const DeleteData = async () => {
      const results = await axios.delete(`http://localhost:4000/pole/${id}`)
      setPoleCards(poleCards.filter(poleCard => poleCard.id != id))
    }
    DeleteData()
  }

  return (
    <>
      {poleCards.map(card => (
        <PoleCardAdmin key={card.id} {...card} deleteCard={clickCard} />
      ))}
    </>
  )
}

export default PoleCardList
