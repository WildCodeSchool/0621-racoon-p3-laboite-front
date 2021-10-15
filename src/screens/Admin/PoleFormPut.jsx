import { useState } from 'react'
import axios from 'axios'
import PutTinyDesc from '../../components/Form/PutTinyDesc'
import PutTinyFunc from '../../components/Form/PutTinyFunc'

import './form.css'

const PoleFormPut = props => {
  // props stocks two functions (parameters) from PoleCardList
  const { modifyValue, poleData } = props
  const [putImage, setPutImage] = useState()
  const [putFunc, setPutFunc] = useState()
  const [putMiniature, setPutMiniature] = useState()

  //--- modify API data in cardList ---//
  const submitPoleData = async event => {
    event.preventDefault()
    // newPost retrieve all the pole cards of PoleCardList
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
      //modify the card with the id stocked in modifyValue
      const results = await axios.put(
        `${process.env.REACT_APP_URL_API}/poles/${props.id}`,
        newPost
      )
      console.log('results :', results)
    } catch (err) {
      console.log(err)
    }
    // upload the modified card in poleCardList
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
      <div className='form-container'>
        <form className='new-pole-form' encType='multipart/form-data'>
          <label>Nom de l&apos;onglet</label>
          <input
            name='pole_name'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={props.pole_name}
          />
          <label>Bannière</label>
          <input value={props.pole_banner} />
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
            value={props.pole_title}
          />
          <label>Pôle picto</label>
          <input
            name='pole_picto'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={props.pole_picto}
          />
          <label>Pôle description</label>
          <label>Photo de Fonctionnement</label>
          <input value={props.pole_func_img} />
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
            value={props.pole_num}
          />
          <label>E-mail</label>
          <input
            name='pole_email'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={props.pole_email}
          />
          <label>Vignette</label>
          <input value={props.pole_miniature_img} />
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
            value={props.pole_catchphrase}
          />
        </form>
        <PutTinyDesc
          setDataDesc={setDataDesc}
          modifyValue={modifyValue}
          props={props}
          name='pole_desc'
          key='pole_desc'
          value={props.pole_desc}
        />
        <PutTinyFunc
          setDataFunc={setDataFunc}
          modifyValue={modifyValue}
          props={props}
          name='pole_func'
          key='pole_func'
        />
        <button onClick={submitPoleData}>Publier</button>
      </div>
    </div>
  )
}
export default PoleFormPut
