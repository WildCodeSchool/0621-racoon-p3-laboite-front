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

  //--- get API data in cardList  and stock in poleCards ---//
  const poleData = async () => {
    const results = await axios.get(`http://localhost:4000/poles`)
    setPoleCards(results.data)
  }
  useEffect(() => {
    // pole data retrieve all the pole cards
    poleData()
  }, [])

  //--- return cards in cardList, fitlering out the poleCard.id selected ---//
  //--- and delete it---//
  const deleteCard = id => {
    const confirmation = confirm('Voulez-vous supprimer ce pôle ?')
    if (confirmation) {
      const DeleteData = async () => {
        await axios.delete(`http://localhost:4000/poles/${id}`)
        setPoleCards(poleCards.filter(poleCard => poleCard.id != id))
      }
      DeleteData()
    }
  }

  //--- function that get the card you want to modify ---//
  //---  and stock it in poleCardUpdate ---//
  const modifyCard = id => {
    const modifyData = async () => {
      const results = await axios.get(`http://localhost:4000/poles/admin/${id}`)
      setPoleCardUpdate(results.data[0])
      setShowFormPut(true)
    }
    modifyData()
  }

  //--- function that stock the key:value of the object stocked ---//
  //--- in setPoleCardUpdate ---//
  const modifyValue = (name, value) => {
    setPoleCardUpdate({
      ...poleCardUpdate,
      [name]: value
    })
  }

  return (
    <>
      {/* map all the cards stocked in poleCards 
    in PoleCardAdmin component and pass it its props 
    and the functions delete and modify */}
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

      {/* if onClick + then showFormPost open the PoleFormPost component and 
      pass it poleData infos to update the cardList */}
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
