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
  // const [testId, setTestId] = useState({})

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
      const results = await axios.get(`http://localhost:4000/pole/${id}`)
      setPoleCardUpdate(results.data)
      console.log('coucou', results.data)
      setShowFormPut(true)
      // setTestId(id)
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
      {console.log('-----------------ICI------------------', poleCards)}
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
        <PoleFormPut {...poleCardUpdate} modifyValue={modifyValue} />
      ) : null}
    </>
  )
}

export default PoleCardList
