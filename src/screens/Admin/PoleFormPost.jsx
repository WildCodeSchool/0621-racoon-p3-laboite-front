import { useState, useEffect } from 'react'
import axios from 'axios'

const PoleFormPost = () => {
  const [poleToCreate, setPoleToCreate] = useState([])
  useEffect(() => {
    const recupData = async () => {
      const results = await axios.post(`http://localhost:4242/pole/`)
      console.log(results.data)
      setPoleToCreate(results.data)
    }
    recupData()
  }, [])

  return (
    <div classsName='form-container'>
      <form className='new-pole-form'>
        <label>Nom de l'onglet</label>
        <input placeholder={`Nom de l'onglet`} />
        <label>Bannière</label>
        <input placeholder={`Bannière`} />
        <label>Titre de page pôle</label>
        <input placeholder={`Titre de page pôle`} />
        <label>Pôle picto</label>
        <input placeholder={`Pôle picto`} />
        {/* description du pole tinyMCE */}
        <label>Photo de Fonctionnement</label>
        <input placeholder={`Photo de Fonctionnement`} />
        {/* fonctionnement du pole tinyMCE */}
        <label>Numéro de téléphone</label>
        <input placeholder={`Numéro de téléphone`} /> <label>E-mail</label>
        <input placeholder={`e-mail`} />
        <label>Vignette</label>
        <input placeholder={`Vignette`} />
        <label>Sous-titre</label>
        <input placeholder={`Sous-titre`} />
      </form>
    </div>
  )
}

export default PoleFormPost
