// import { useState, useEffect } from 'react'
import axios from 'axios'
import PutTinyDesc from '../../components/Form/PutTinyDesc'
import PutTinyFunc from '../../components/Form/PutTinyFunc'

import './form.css'

const PoleFormPut = poleCard => {
  const { modifyValue, poleData } = poleCard

  //--- modify API data in cardList ---//
  const submitPoleData = async event => {
    event.preventDefault()
    const results = await axios.put(
      `${process.env.REACT_APP_URL_API}/pole/${poleCard.id}`,
      poleCard
    )
    console.log('results :', results)
    poleData()
  }
  // setData pertmet de transmettre l'info stockée ds tiny
  const setData = text => {
    modifyValue({ ...modifyValue, pole_desc: text })
  }
  console.log(setData)

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
          <label>Pôle description</label>
          <label>Photo de Fonctionnement</label>
          <input
            name='pole_func_img'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_func_img}
          />
          <label>Pôle fonctionnement</label>
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
        <PutTinyDesc
          setData={setData}
          modifyValue={modifyValue}
          poleCard={poleCard}
        />
        <PutTinyFunc
          setData={setData}
          modifyValue={modifyValue}
          poleCard={poleCard}
        />
        <button onClick={submitPoleData}>Publier</button>
      </div>
    </div>
  )
}
export default PoleFormPut
