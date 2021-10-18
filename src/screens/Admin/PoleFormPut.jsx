import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'

import { useState } from 'react'
import axios from 'axios'
import PutTinyDesc from '../../components/Form/PutTinyDesc'
import PutTinyFunc from '../../components/Form/PutTinyFunc'

import './form.css'

const PoleFormPut = props => {
  // props stocks two functions (parameters) from PoleCardList
  const { modifyValue, poles, getPoles, pcu, closeForm } = props
  const [putImage, setPutImage] = useState()
  const [putFunc, setPutFunc] = useState()
  const [putMiniature, setPutMiniature] = useState()
  const [open, setOpen] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  //--- modify API data in cardList ---//
  const submitPoleData = async event => {
    event.preventDefault()
    // newPost retrieve all the pole cards of PoleCardList
    const newPost = { ...pcu }
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
    setOpen(true)
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
        <form
          className='FormList'
          encType='multipart/form-data'
          className='formItems'
        >
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
          <div className='tiny'>
            <label>Pôle description</label>
            <PutTinyDesc
              setDataDesc={setDataDesc}
              modifyValue={modifyValue}
              props={props}
              pcu={pcu}
              name='pole_desc'
              key='pole_desc'
              // value={props.pole_desc}
            />
          </div>
          <input value={pcu.pole_func_img} />
          <input
            type='file'
            name='pole_func_img'
            onChange={e => {
              setPutFunc(e.target.files[0])
            }}
          />
          <div className='tiny'>
            <label>Pôle Fonctionnement</label>
            <PutTinyFunc
              setDataFunc={setDataFunc}
              modifyValue={modifyValue}
              props={props}
              name='pole_func'
              key='pole_func'
              pcu={pcu}
              // value={props.pole_func}
            />
          </div>
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

        <button onClick={submitPoleData}>Publier</button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Alert onClose={handleClose} severity='success'>
            Pôle modifié avec succès
          </Alert>
        </Snackbar>
      </div>
    </div>
  )
}
export default PoleFormPut
