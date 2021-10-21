import axios from 'axios'
import { useState, useEffect } from 'react'

import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'

import AdminCardPole from '../../../components/Admin/AdminCardPole'
import AdminLeftMenu from '../../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../../components/Admin/AdminTopDiv'
import PoleFormPost from './PoleFormPost'
import PoleFormPut from './PoleFormPut'

import '../Admin.css'
import '../form.css'

const AdminPole = () => {
  const [createForm, setCreateForm] = useState(false)
  const [updateForm, setUpdateForm] = useState(false)
  const [poles, setPoles] = useState([])
  const [poleCardUpdate, setPoleCardUpdate] = useState({})
  const [idPoleToUpdate, setIdPoleToUpdate] = useState('')
  const [adminInput, setAdminInput] = useState({})
  const [resMessage, setResMessage] = useState('')
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  // READ all team poles from backEnd
  const getPoles = async () => {
    const results = await axios.get(`${process.env.REACT_APP_URL_API}/poles`)
    setPoles(results.data)
  }
  useEffect(() => {
    getPoles()
  }, [])

  // READ a pole data from idPoleToUpdate
  useEffect(() => {
    setAdminInput('')
    setResMessage('')
    const getPole = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/poles/${idPoleToUpdate}`)
        .then(results => setAdminInput(results.data))
    }
    getPole()
  }, [idPoleToUpdate])

  // Functions to display forms
  const showCreateForm = () => {
    setAdminInput({}) // clear inputs
    setCreateForm(true) // open createForm
    setUpdateForm(false) // close updateForm
  }
  const showUpdateForm = e => {
    setCreateForm(false) // close createForm
    setUpdateForm(true) // open updateForm
    setIdPoleToUpdate(e.target.id) // auto-trigger getPole
  }
  const closeForm = () => {
    setCreateForm(false) // close createForm
    setUpdateForm(false) // close updateForm
    setAdminInput({}) // clear inputs
    setIdPoleToUpdate('') // clear selected Pole
    setResMessage('') // clear message
  }

  const modifyValue = (name, value) => {
    setPoleCardUpdate({
      ...poleCardUpdate,
      [name]: value
    })
  }
  //--- and delete it---//
  const deleteCard = id => {
    const confirmation = confirm('Voulez-vous supprimer ce pôle ?')
    if (confirmation) {
      const DeleteData = async () => {
        await axios.delete(`${process.env.REACT_APP_URL_API}/poles/${id}`)
        setPoles(poles.filter(poleCard => poleCard.id != id))
      }
      DeleteData()
      setOpen(true)
    }
  }

  //--- function that get the card you want to modify ---//
  //---  and stock it in poleCardUpdate ---//
  const modifyCardPole = id => {
    const modifyData = async () => {
      const results = await axios.get(
        `${process.env.REACT_APP_URL_API}/poles/admin/${id}`
      )
      setPoleCardUpdate(results.data[0])
      setUpdateForm(!updateForm)
    }
    modifyData()
  }
  //-----------------------------------------------

  return (
    <div className='adminContainer flex row'>
      <AdminLeftMenu />
      <div className='adminMenuRight flex col'>
        <div className='adminHeader'>
          Bienvenue dans l&apos;espace administration !
        </div>

        <div className='topDiv'>
          <AdminTopDiv elmt={'pôles'} addElement={showCreateForm} />
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {poles.length === 0 ? (
                <div className='noCard'>
                  Il n&apos;y a pas encore d&apos;élement à afficher ! Merci de
                  créer un nouvel élément !
                </div>
              ) : (
                poles.map((elmt, index) => (
                  <AdminCardPole
                    key={index}
                    id={elmt.id}
                    name={elmt.pole_name}
                    img={elmt.pole_miniature_img}
                    deleteCard={deleteCard}
                    modifyCardPole={modifyCardPole}
                    setCreateForm={setCreateForm}
                    setUpdateForm={setUpdateForm}
                    updateForm={updateForm}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        <div className='bottomDiv flex col jcc aic'>
          {createForm ? (
            <PoleFormPost
              poles={poles}
              getPoles={getPoles}
              closeForm={closeForm}
            />
          ) : null}
          {updateForm ? (
            <PoleFormPut
              pcu={{ ...poleCardUpdate }}
              modifyValue={modifyValue}
              poles={poles}
              getPoles={getPoles}
              closeForm={closeForm}
            />
          ) : null}
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
              Pôle supprimé avec succès
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  )
}

export default AdminPole
