// import { useState, useEffect } from 'react'
import axios from 'axios'
import PutTinyDesc from '../../components/Form/PutTinyDesc'
import PutTinyFunc from '../../components/Form/PutTinyFunc'

import './form.css'

const PoleFormPut =  (poleCard, poleCardUpdate, setPoleCardUpdate)   => {
  const { modifyValue, poleData } = poleCard

  //--- modify API data in cardList ---//
  const submitPoleData = async event => {
    event.preventDefault()
    const results = await axios.put(
      `${process.env.REACT_APP_URL_API}/poles/${poleCard.id}`,
      poleCard
    )
    console.log('results :', results)
    poleData()
  }
  // setData pertmet de transmettre l'info stockée ds tiny
  const setDataDesc = text => {
    modifyValue('pole_desc', text)
  }

  const setDataFunc = text => {
    modifyValue('pole_func', text)
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
          // type='file'
            name='pole_banner'
            onChange={event =>
              modifyValue(event.target.name, event.target.file)
            }
            // value={`${process.env.REACT_APP_URL_API}/static/images/${poleCard.pole_banner}`}
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
            // type='file'
            name='pole_func_img'
            onChange={event =>
              modifyValue(event.target.name, event.target.file)
            }
            // value={`${process.env.REACT_APP_URL_API}/static/images/${poleCard.pole_func_img}`}
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
            // type='file'
            name='pole_miniature_img'
            onChange={event =>
              modifyValue(event.target.name, event.target.file)
            }
            // value={`${process.env.REACT_APP_URL_API}/static/images/${poleCard.pole_miniature_img}`}          
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
          setDataDesc={setDataDesc}
          modifyValue={modifyValue}
          poleCard={poleCard}
          name='pole_desc'
          key='pole_desc'
          value={poleCard.pole_desc}
            // onChange={event =>
            //   setPoleCardUpdate(event.target.name, event.target.value)
            // }
        />
        <PutTinyFunc
          setDataFunc={setDataFunc}
          modifyValue={modifyValue}
          poleCard={poleCard}
          name='pole_func'
          key='pole_func'
            onChange={event =>
              modifyValue(event.target.value)
            }
        />
        <button onClick={submitPoleData}>Publier</button>
      </div>
    </div>
  )
}
export default PoleFormPut
