import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

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
  const [open, setOpen] = useState(false)


  const handleClose = () => {
    setOpen(false)
  }
  const showFormOnClick = () => {
    setShowFormPost(true)
  }

  //--- get API data in cardList ---//
  const poleData = async () => {
    const results = await axios.get(`http://localhost:4000/poles`)
    setPoleCards(results.data)
  }
  useEffect(() => {
    poleData()
  }, [])

  //--- return cards in cardList if polecard does not have the id deleted ---//
  const deleteCard = id => {
    const confirmation = confirm('Voulez-vous supprimer ce pôle ?')
    if (confirmation) {
    const DeleteData = async () => {
      await axios.delete(`http://localhost:4000/poles/${id}`)
      setPoleCards(poleCards.filter(poleCard => poleCard.id != id))
    }
    DeleteData()
    setOpen(true)
  }
}

  const modifyCard = id => {
    console.log('id :', id)
    const modifyData = async () => {
      const results = await axios.get(`http://localhost:4000/poles/admin/${id}`)
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }} >
        <Alert onClose={handleClose} severity="success">
          Pôle supprimé avec succès
        </Alert>
        </Snackbar>
    </>
  )
}

export default PoleCardList
