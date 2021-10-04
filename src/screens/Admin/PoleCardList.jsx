import axios from 'axios'
import { useEffect, useState } from 'react'
import PoleCardAdmin from './PoleCardAdmin'
import PoleFormPost from './PoleFormPost'
import PoleFormPut from './PoleFormPut'

const PoleCardList = () => {
  const [poleCards, setPoleCards] = useState([])
  const [showFormPost, setShowFormPost] = useState(false)
  const [showFormPut, setShowFormPut] = useState(false)
  const [poleCardUpdate, setPoleCardUpdate] = useState({})

  const showFormOnClick = () => {
    setShowFormPost(true)
  }

  //--- update the cardList with new datas ---//
  const updatePoleCard = poleInfo => {
    poleCards.push(poleInfo)
    setPoleCards(poleCards)
  }

  //--- get API data in cardList ---//
  useEffect(() => {
    const PoleData = async () => {
      const results = await axios.get(`http://localhost:4000/pole`)
      setPoleCards(results.data)
    }
    PoleData()
  }, [])

  //--- return cards in cardList if polecard does not have the id deleted ---//
  const deleteCard = id => {
    const DeleteData = async () => {
      const results = await axios.delete(`http://localhost:4000/pole/${id}`)
      setPoleCards(poleCards.filter(poleCard => poleCard.id != id))
    }
    DeleteData()
  }

  const modifyCard = id => {
    console.log(id)
    const modifyData = async () => {
      const results = await axios.get(`http://localhost:4000/pole/${id}`)
      setPoleCardUpdate(results.data)
      setShowFormPut(true)
    }
    modifyData()
  }

  return (
    <>
      {poleCards.map(card => (
        <PoleCardAdmin
          key={card.id}
          {...card}
          deleteCard={deleteCard}
          modifyCard={modifyCard}
        />
      ))}
      <h3>Nouvelle page pôle</h3>
      {/* show or hide form button */}
      <button onClick={showFormOnClick}>+ </button>
      {showFormPost ? <PoleFormPost updatePoleCards={updatePoleCard} /> : null}
      {showFormPut ? <PoleFormPut poleCard={poleCardUpdate} /> : null}
    </>
  )
}

export default PoleCardList
