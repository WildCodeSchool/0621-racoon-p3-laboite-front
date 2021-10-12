import FormTiny from '../../components/Form/FormTiny'
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

  const handlePoleChange = event => {
    setPoleInfo({ ...poleInfo, [event.target.name]: event.target.value })
  }

  // const setData = texte => {
  //   setAdminInput({ ...adminInput, activity_desc: texte })
  // }
  const submitPoleData = async event => {
    event.preventDefault()
    const results = await axios.post(
      `${process.env.REACT_APP_URL_API}/pole`,
      poleInfo
    )
    console.log('results :', results.data)
    poleData()
  }

  // setData pertmet de transmettre l'info stockée ds tiny
  const setData = texte => {
    setPoleInfo({ ...poleInfo, pole_desc: texte })
  }

  return (
    <div>
      {console.log(poleData)}
      <div className='form-container'>
        <form className='new-pole-form'>
          <label>Nom de l&apos;onglet</label>
          <input
            name='pole_name'
            onChange={handlePoleChange}
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
          <label>Pôle description</label>
          <FormActivity
            setPoleInfo={setPoleInfo}
            poleInfo={poleInfo}
            onChangeHandler={handlePoleChange}
            setData={setData}
            setConfirmTiny={setConfirmTiny}
            confirmTiny={confirmTiny}
            // submitData={submitData}
          />
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
          />
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

export default PoleFormPost
