import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const Pole = () => {
  const [pole, setPole] = useState()
  const { id } = useParams()

  useEffect(async () => {
    const result = await axios(
      `http://localhost:4000/pole/${id}
    `
    )
    setPole(result.data)
  }, [])
  console.log(pole)

  return (
    <div>
      <p>Pôle Position</p>
    </div>
  )
}

export default Pole
