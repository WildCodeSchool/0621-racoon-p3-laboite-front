import { useState } from 'react'
import axios from 'axios'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'

import PutTinyDesc from '../../../components/Form/PutTinyDesc'
import PutTinyFunc from '../../../components/Form/PutTinyFunc'

const PoleFormPut = props => {
  const { modifyValue, getPoles, pcu, closeForm } = props
  const [putImage, setPutImage] = useState()
  const [putFunc, setPutFunc] = useState()
  const [putMiniature, setPutMiniature] = useState()
  const [updateAlert, setUpdateAlert] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [confirmTiny, setConfirmTiny] = useState(false)
  const [confirmTiny1, setConfirmTiny1] = useState(false)

  //--- modify API data in cardList ---//
  const submitPoleData = async event => {
    event.preventDefault()
    // newPost retrieve all the pole cards of PoleCardList
    const newPost = { ...pcu }
    const fd = new FormData()

    if (putImage) {
      const filename1 = Date.now() + putImage.name
      fd.append('pole_banner', putImage, filename1)
      newPost.pole_banner = filename1
    }
    if (putFunc) {
      const filename2 = Date.now() + putFunc.name
      fd.append('pole_func_img', putFunc, filename2)
      newPost.pole_func_img = filename2
    }
    if (putMiniature) {
      const filename3 = Date.now() + putMiniature.name
      fd.append('pole_miniature_img', putMiniature, filename3)
      newPost.pole_miniature_img = filename3
    }
    try {
      await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
    } catch (err) {
      console.log(err)
    }
    try {
      //modify the card with the id stocked in modifyValue
      const results = await axios.put(
        `${process.env.REACT_APP_URL_API}/poles/${pcu.id}`,
        newPost
      )
      setRefresh(!refresh)
      setTimeout(closeForm, 2500)
    } catch (err) {
      console.log(err)
    }
    // upload the modified card in poleCardList
    getPoles()
    setUpdateAlert(true)
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  // setData pertmet de transmettre l'info stockée ds tiny
  const setDataDesc = text => {
    modifyValue('pole_desc', text)
  }

  const setDataFunc = text => {
    modifyValue('pole_func', text)
  }

  const handleEditorChange = () => {
    setConfirmTiny(false)
    setConfirmTiny1(false)
  }
  const handleEditorChange1 = () => {
    setConfirmTiny1(false)
  }

  return (
    <div className='form flex col jcc aic'>
      <div className='closeBtn flex jcc aic' onClick={closeForm}>
        x
      </div>
      <div className='bottomDivTitle'>Mettre à jour le pôle</div>
      <div className='FormContainer'>
        <form encType='multipart/form-data' className='formItems'>
          <label>Nom de l&apos;onglet</label>
          <input
            name='pole_name'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={pcu.pole_name}
          />
          <label>Bannière</label>
          <input value={pcu.pole_banner} />
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
            value={pcu.pole_title}
          />
          <label>Pôle picto</label>
          <input
            name='pole_picto'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={pcu.pole_picto}
          />
        </form>
        <div className='tiny'>
          <label>Pôle description</label>
          <PutTinyDesc
            setDataDesc={setDataDesc}
            modifyValue={modifyValue}
            props={props}
            pcu={pcu}
            name='pole_desc'
            key='pole_desc'
            confirmTiny={confirmTiny}
            setConfirmTiny={setConfirmTiny}
            handleEditorChange={handleEditorChange}
          />
        </div>
        <form className='formItems' encType='multipart/form-data'>
          <label>Photo de Fonctionnement</label>
          <input value={pcu.pole_func_img} />
          <input
            type='file'
            name='pole_func_img'
            onChange={e => {
              setPutFunc(e.target.files[0])
            }}
          />
        </form>
        <div className='tiny'>
          <label>Pôle Fonctionnement</label>
          <PutTinyFunc
            setDataFunc={setDataFunc}
            modifyValue={modifyValue}
            props={props}
            name='pole_func'
            key='pole_func'
            pcu={pcu}
            confirmTiny1={confirmTiny1}
            setConfirmTiny1={setConfirmTiny1}
            handleEditorChange1={handleEditorChange1}
          />
        </div>
        <form className='formItems' encType='multipart/form-data'>
          <label>Numéro de téléphone</label>
          <input
            name='pole_num'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={pcu.pole_num}
          />
          <label>E-mail</label>
          <input
            name='pole_email'
            onChange={event =>
              modifyValue(event.target.name, event.target.value)
            }
            value={pcu.pole_email}
          />
          <label>Vignette</label>
          <input value={pcu.pole_miniature_img} />
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
            value={pcu.pole_catchphrase}
          />
        </form>
        <button className='btnForm' onClick={submitPoleData}>
          Publier
        </button>
        <Snackbar
          open={updateAlert}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Alert severity='success'>Pôle modifié avec succès</Alert>
        </Snackbar>
      </div>
    </div>
  )
}
export default PoleFormPut
