import { useState, useEffect } from 'react'
import axios from 'axios'

import './form.css'

const PoleFormPut = poleCard => {
  const [poleToModify, setPoleToModify] = useState(poleCard)

  const handlePoleChange = event => {
    setPoleToModify({
      ...poleToModify,
      [event.target.name]: event.target.value
    })
  }

  const submitPoleData = async event => {
    console.log('poleToModify :', poleToModify)
    event.preventDefault()
    const results = await axios.put(
      `${process.env.REACT_APP_URL_API}/pole`,
      poleToModify
    )
    console.log('results :', results)
    // updatePoleCards(results)
  }

  return (
    <div>
      <div classsName='form-container'>
        <form className='new-pole-form'>
          <label>Nom de l&apos;onglet</label>
          <input
            name='pole_name'
            onChange={handlePoleChange}
            value={poleToModify.pole_name}
            placeholder={`Nom de l'onglet`}
          />
          <label>Bannière</label>
          <input
            name='pole_banner'
            onChange={handlePoleChange}
            placeholder={`Bannière`}
          />
          <label>Titre de page pôle</label>
          <input
            name='pole_title'
            onChange={handlePoleChange}
            placeholder={`Titre de page pôle`}
          />
          <label>Pôle picto</label>
          <input
            name='pole_picto'
            onChange={handlePoleChange}
            placeholder={`Pôle picto`}
          />
          {/* <FormTiny setData={setData} setConfirmTiny={setConfirmTiny} /> */}
          <label>Photo de Fonctionnement</label>
          <input
            name='pole_func_img'
            onChange={handlePoleChange}
            placeholder={`Photo de Fonctionnement`}
          />
          {/* <FormTiny setData={setData} setConfirmTiny={setConfirmTiny} /> */}
          <label>Numéro de téléphone</label>
          <input
            name='pole_num'
            onChange={handlePoleChange}
            placeholder={`Numéro de téléphone`}
          />{' '}
          <label>E-mail</label>
          <input
            name='pole_email'
            onChange={handlePoleChange}
            placeholder={`e-mail`}
          />
          <label>Vignette</label>
          <input
            name='pole_miniature_img'
            onChange={handlePoleChange}
            placeholder={`Vignette`}
          />
          <label>Sous-titre</label>
          <input
            name='pole_catchphrase'
            onChange={handlePoleChange}
            placeholder={`Sous-titre`}
          />
        </form>
        <button onClick={submitPoleData}>Publier</button>
      </div>
    </div>
  )
}
export default PoleFormPut
