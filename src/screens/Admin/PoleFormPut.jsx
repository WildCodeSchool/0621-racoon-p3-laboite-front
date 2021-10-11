import { useState, useEffect } from 'react'
import axios from 'axios'

import './form.css'

const PoleFormPut = poleCard => {
  const [poleToModify, setPoleToModify] = useState({})
  const { modifyValue, poleData } = poleCard
  console.log(modifyValue)
  console.log('-----------------ICI01------------------', poleCard)
  //--- get the correct field to update input ---//

  // useEffect(() => {
  //   console.log('pole card : ', poleCard)
  //   setPoleToModify({
  //     ...poleToModify,
  //     [event.target.name]: event.target.value
  //   })
  // }, [])

  //--- modify API data in cardList ---//
  const submitPoleData = async event => {
    console.log('poleToModify : -----------------------------', poleCard)
    event.preventDefault()
    const results = await axios.put(
      `${process.env.REACT_APP_URL_API}/pole/${poleCard.id}`,
      poleCard
    )
    console.log('results :', results)
    poleData()
    // updatePoleCards(results)
  }

  return (
    <div>
      poulet
      <div className='form-container'>
        <form className='new-pole-form'>
          <label>Nom de l&apos;onglet</label>
          <input
            name='pole_name'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_name}
          />
          <label>Bannière</label>
          <input
            name='pole_banner'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_banner}
          />
          <label>Titre de page pôle</label>
          <input
            name='pole_title'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_title}
          />
          <label>Pôle picto</label>
          <input
            name='pole_picto'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_picto}
          />
          {/* <FormTiny setData={setData} setConfirmTiny={setConfirmTiny} /> */}
          <label>Photo de Fonctionnement</label>
          <input
            name='pole_func_img'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_func_img}
          />
          {/* <FormTiny setData={setData} setConfirmTiny={setConfirmTiny} /> */}
          <label>Numéro de téléphone</label>
          <input
            name='pole_num'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_num}
          />
          <label>E-mail</label>
          <input
            name='pole_email'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_email}
          />
          <label>Vignette</label>
          <input
            name='pole_miniature_img'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_miniature_img}
          />
          <label>Sous-titre</label>
          <input
            name='pole_catchphrase'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_catchphrase}
          />
        </form>
        <button onClick={submitPoleData}>Publier</button>
      </div>
    </div>
  )
}
export default PoleFormPut
