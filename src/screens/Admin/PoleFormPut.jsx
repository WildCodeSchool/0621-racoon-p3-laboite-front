import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './form.css'

const PoleFormPut = () => {
  const { id } = useParams()
  const [poleToModify, setPoleToModify] = useState([])
  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4242/pole/${id}`)
      console.log(results.data)
      setPoleToModify(results.data)
    }
    recupData()
  }, [])
  return (
    <div classsName='form-container'>
      <form className='new-pole-form'>
        {poleToModify.map(info => (
          <div key={info.pole_id}>
            <label>Nom de l'onglet</label>
            <input placeholder={info.pole_name} />
            <label>Bannière</label>
            <input placeholder={info.pole_banner} />
            <label>Titre de page pôle</label>
            <input placeholder={info.pole_title} />
            <label>Pôle picto</label>
            <input placeholder={info.pole_picto} />
            {/* description du pole tinyMCE */}
            <label>Photo de Fonctionnement</label>
            <input placeholder={info.pole_func_img} />
            {/* fonctionnement du pole tinyMCE */}{' '}
            <label>Numéro de téléphone</label>
            <input placeholder={info.pole_num} /> <label>E-mail</label>
            <input placeholder={info.pole_email} />
            <label>Vignette</label>
            <input placeholder={info.pole_miniature_img} />
            <label>Sous-titre</label>
            <input placeholder={info.pole_catchphrase} />
          </div>
        ))}
      </form>
    </div>
  )
}
export default PoleFormPut
