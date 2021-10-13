import FormTiny from '../../components/Form/FormTiny'
import FormTinyFunc from '../../components/Form/FormTinyFunc'

import axios from 'axios'
import { useState } from 'react'

const PoleFormPost = ({ poleData }) => {
  const [confirmTiny, setConfirmTiny] = useState(false)
  // const [newActivity, setNewActivity] = useState({
  //   activity_desc: '',
  //   activity_img: '',
  //   activity_title: ''
  // })
  const [poleInfo, setPoleInfo] = useState({
    pole_name: '',
    pole_title: '',
    pole_picto: '',
    pole_desc: '',
    pole_banner: '',
    pole_func: '',
    pole_func_img: '',
    pole_num: '',
    pole_email: '',
    pole_miniature_img: '',
    pole_catchphrase: ''
  })

  const [poleImage, setPoleImage] = useState()
  const [poleFunc, setPoleFunc] = useState()
  const [poleMiniature, setPoleMiniature] = useState()

  const handlePoleChange = event => {
    setPoleInfo({ ...poleInfo, [event.target.name]: event.target.value })
  }

  // const setData = texte => {
  //   setAdminInput({ ...adminInput, activity_desc: texte })
  // }
  const submitPoleData = async event => {
    event.preventDefault()
    const newPost = { ...poleInfo }
    if (poleImage && poleFunc && poleMiniature) {
      const fd = new FormData()
      const filename = Date.now() + poleImage.name
      fd.append('pole_banner', poleImage, filename)
      newPost.pole_banner = filename
      const filen = Date.now() + poleFunc.name
      fd.append('pole_func_img', poleFunc, filen)
      newPost.pole_func_img = filen
      const filena = Date.now() + poleMiniature.name
      fd.append('pole_miniature_img', poleMiniature, filena)
      newPost.pole_miniature_img = filena
      try {
        await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const results = await axios.post(
        `${process.env.REACT_APP_URL_API}/poles`,
        newPost
      )
      console.log(results)
    } catch (err) {
      console.log(err)
    }
    poleData()
  }

  // setData pertmet de transmettre l'info stockée ds tiny
  const setData = text => {
    setPoleInfo({ ...poleInfo, pole_desc: text })
  }
  const setDataFunc = text => {
    setPoleInfo({ ...poleInfo, pole_func: text })
  }
  // console.log('coucou les infos', poleInfo)
  console.log('stylé les images', poleImage)
  console.log('stylé les func', poleFunc)
  console.log('stylé les Miniature', poleMiniature)
  return (
    <div>
      {console.log(poleData)}
      <div className='form-container'>
        <form className='new-pole-form' encType='multipart/form-data'>
          <label>Nom de l&apos;onglet</label>
          <input
            name='pole_name'
            onChange={handlePoleChange}
            placeholder={`Nom de l'onglet`}
          />
          <label>Bannière</label>
          <input
            type='file'
            name='pole_banner'
            key='pole_banner'
            onChange={handlePoleChange}
            placeholder={`Bannière`}
            onChange={e => {
              setPoleImage(e.target.files[0])
            }}
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
        </form>
        {/* <label>Pôle description</label> */}
        <FormTiny setData={setData} setConfirmTiny={setConfirmTiny}/>
        <form>
          <label>Photo de Fonctionnement</label>
          <input
            type='file'
            name='pole_func_img'
            key='pole_func_img'
            onChange={e => {
              setPoleFunc(e.target.files[0])
            }}
            placeholder={`Photo de Fonctionnement`}
          />
        </form>
        {/* <label>Pôle Fonctionnement</label> */}
        <FormTinyFunc setDataFunc={setDataFunc}/>
        <form>
          <label>Numéro de téléphone</label>
          <input
            name='pole_num'
            onChange={handlePoleChange}
            placeholder={`Numéro de téléphone`}
          />
          <label>E-mail</label>
          <input
            name='pole_email'
            onChange={handlePoleChange}
            placeholder={`e-mail`}
          />
          <label>Vignette</label>
          <input
            type='file'
            name='pole_miniature_img'
            key='pole_miniature_img'
            onChange={e => {
              setPoleMiniature(e.target.files[0])
            }}
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

export default PoleFormPost
