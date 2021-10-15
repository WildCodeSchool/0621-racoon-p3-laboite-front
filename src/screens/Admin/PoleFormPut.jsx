import { useState } from 'react'
import axios from 'axios'
import PutTinyDesc from '../../components/Form/PutTinyDesc'
import PutTinyFunc from '../../components/Form/PutTinyFunc'

import './form.css'

const PoleFormPut = poleCard => {
  const { modifyValue, poleData } = poleCard
  const [putImage, setPutImage] = useState()
  const [putFunc, setPutFunc] = useState()
  const [putMiniature, setPutMiniature] = useState()

  //--- modify API data in cardList ---//
  const submitPoleData = async event => {
    event.preventDefault()
    const newPost = { ...poleData }
    if (putImage && putFunc && putMiniature) {
      const fd = new FormData()
      const filename = Date.now() + putImage.name
      fd.append('pole_banner', putImage, filename)
      newPost.pole_banner = filename
      const filen = Date.now() + putFunc.name
      fd.append('pole_func_img', putFunc, filen)
      newPost.pole_func_img = filen
      const filena = Date.now() + putMiniature.name
      fd.append('pole_miniature_img', putMiniature, filena)
      newPost.pole_miniature_img = filena
      try {
        await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const results = await axios.put(
        `${process.env.REACT_APP_URL_API}/poles/${poleCard.id}`,
        newPost
      )
      console.log('results :', results)
    } catch (err) {
      console.log(err)
    }
    poleData()
    alert('Pole modifié avec succès')
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
        <form className='new-pole-form' encType='multipart/form-data'>
          <label>Nom de l&apos;onglet</label>
          <input
            name='pole_name'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={poleCard.pole_name}
          />
          <label>Bannière</label>
          <input value={poleCard.pole_banner} />
          <input
            type='file'
            name='pole_banner'
            onChange={e => {
              setPutImage(e.target.files[0])
            }}
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
          <input value={poleCard.pole_func_img} />
          <input
            type='file'
            name='pole_func_img'
            onChange={e => {
              setPutFunc(e.target.files[0])
            }}
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
          <input value={poleCard.pole_miniature_img} />
          <input
            type='file'
            name='pole_miniature_img'
            onChange={e => {
              setPutMiniature(e.target.files[0])
            }}
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
        />
        <PutTinyFunc
          setDataFunc={setDataFunc}
          modifyValue={modifyValue}
          poleCard={poleCard}
          name='pole_func'
          key='pole_func'
        />
        <button onClick={submitPoleData}>Publier</button>
      </div>
    </div>
  )
}
export default PoleFormPut
