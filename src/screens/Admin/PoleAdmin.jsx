import FormTiny from '../../components/Form/FormTiny'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import './PoleAdmin.css'

const PoleAdmin = () => {
  const [pole, setPole] = useState([])
  const [adminInput, setAdminInput] = useState({})

  useEffect(() => {
    const recupData = async () => {
      const results = await axios.post(`http://localhost:4000/pole`)
      console.log(results.data)
      setPole(results.data)
    }
    recupData()
  }, [])
  console.log(pole)

  const onChangeHandler = useCallback(({ target: { name, value } }) =>
    setAdminInput(state => ({ ...state, [name]: value }), [])
  )
  const setData = texte => {
    setAdminInput({ ...adminInput, tiny: texte })
  }

  return (
    <div className='new-pole-container'>
      <h3>Nouvelle page pôle</h3>
      <form className='new-pole-form'>
        <label>Nom de l'onglet</label>
        <input
          placeholder={"Nom de l'onglet"}
          onChange={onChangeHandler}
          value={adminInput.pole_name}
        />

        <label>Bannière</label>
        <input placeholder='url' />

        <label>Titre de page pôle</label>
        <input placeholder='titre de la page Pôle' />

        <label>Pôle picto</label>
        <input placeholder='exemple: conciergerie-bell' />

        {/* description du pole tinyMCE */}

        <label>Photo de Fonctionnement</label>
        <input placeholder='url' />

        {/* fonctionnement du pole tinyMCE */}

        <label>Numéro de téléphone</label>
        <input placeholder='numéro de téléphone' />

        <label>E-mail</label>
        <input placeholder='e-mail' />

        <label>Vignette</label>
        <input placeholder="Vignette du pôle pour la page d'accueil" />

        <label>Sous-titre</label>
        <input placeholder="Sous-titre pour la page d'accueil" />
      </form>
    </div>
  )
}

export default PoleAdmin
