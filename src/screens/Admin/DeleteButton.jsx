import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const DeleteButton = ({ id }) => {
  const [list, updateList] = useState(defaultList);
  
  const handleRemoveItem = e => {
    const identity = e.target.getAttribute({ id })
    updateOnlineList(list.filter(item => item.id !== id))
  }

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.delete(`http://localhost:4000/pole/${id}`)
      console.log(results.data)
      setTeam(results.data)
    }
    recupData()
  }, [id])

  return (
    <>
      <button onClick={handleChange} type='button'>
        delete
      </button>
    </>
  )
}

export default DeleteButton
