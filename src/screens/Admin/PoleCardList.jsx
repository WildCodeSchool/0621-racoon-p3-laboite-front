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

  //--- get API data in cardList ---//
  const poleData = async () => {
    const results = await axios.get(`http://localhost:4000/pole`)
    setPoleCards(results.data)
  }
  useEffect(() => {
    poleData()
  }, [])

  //--- return cards in cardList if polecard does not have the id deleted ---//
  const deleteCard = id => {
    const DeleteData = async () => {
      await axios.delete(`http://localhost:4000/pole/${id}`)
      setPoleCards(poleCards.filter(poleCard => poleCard.id != id))
    }
    DeleteData()
  }

  const modifyCard = id => {
    console.log('id :', id)
    const modifyData = async () => {
      const results = await axios.get(`http://localhost:4000/pole/admin/${id}`)
      setPoleCardUpdate(results.data[0])
      setShowFormPut(true)
    }
    modifyData()
  }

  const modifyValue = (name, value) => {
    setPoleCardUpdate({
      ...poleCardUpdate,
      [name]: value
    })
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
      {showFormPost ? <PoleFormPost poleData={poleData} /> : null}
      {showFormPut ? (
        <PoleFormPut
          {...poleCardUpdate}
          modifyValue={modifyValue}
          poleData={poleData}
        />
      ) : null}
    </>
  )
}

export default PoleCardList
