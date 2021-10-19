import { useState, useEffect, useCallback, useContext } from 'react'
import axios from 'axios'

import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'

import { Context } from '../../../context/Context.js'

import AdminCard from '../../../components/Admin/AdminCard'
import AdminFormPartnerCreate from '../../../components/Admin/AdminFormPartnerCreate'
import AdminFormPartnerUpdate from '../../../components/Admin/AdminFormPartnerUpdate'
import AdminLeftMenu from '../../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../../components/Admin/AdminTopDiv'

import '../Admin.css'

const AdminPartner = () => {
  // List of states
  const [refresh, setRefresh] = useState(false)
  const [createForm, setCreateForm] = useState(false)
  const [updateForm, setUpdateForm] = useState(false)
  const [partners, setPartners] = useState([])
  const [idPartnerToUpdate, setIdPartnerToUpdate] = useState('')
  const [adminInput, setAdminInput] = useState({})
  const [resMessage, setResMessage] = useState('')
  const [partnerImage, setPartnerImage] = useState()
  const [deleteAlert, setDeleteAlert] = useState(false)
  const [addAlert, setAddAlert] = useState(false)
  const [updateAlert, setUpdateAlert] = useState(false)

  const { user } = useContext(Context)

  // Defini le Bearer JWT dans header pour les requetes de la page.
  axios.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`
  //----------------------------------------------------------------------------
  // READ all partners from backEnd
  useEffect(() => {
    const getPartners = async () => {
      const results = await axios.get(
        `${process.env.REACT_APP_URL_API}/partners`
      )
      setPartners(results.data)
    }
    getPartners()
  }, [refresh])

  // READ a partner data from idPartnerToUpdate
  useEffect(() => {
    console.log('update_partner', idPartnerToUpdate)
    setAdminInput('')
    setResMessage('')
    const getPartner = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/partners/${idPartnerToUpdate}`)
        .then(results => setAdminInput(results.data))
    }
    getPartner()
  }, [idPartnerToUpdate])

  // CREATE a new partner
  const postPartner = async e => {
    e.preventDefault()
    const newPartnerPost = { ...adminInput }
    if (partnerImage) {
      const fd = new FormData()
      const filename = Date.now() + partnerImage.name
      fd.append('partner_img', partnerImage, filename)
      newPartnerPost.partner_img = filename
      try {
        await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_API}/partners`,
        newPartnerPost
      )
      // if (res){
      console.log('res post', res)
      setResMessage(res.data.message)
      setRefresh(!refresh)
      setTimeout(closeForm, 2500)
      setAddAlert(true)
    } catch (err) {
      // if (err) {
      console.log('logErrPost', err.response)
      setResMessage(err.response.data.message)
      // }
    }
  }

  // UPDATE a partner
  const updatePartner = async e => {
    console.log(idPartnerToUpdate, adminInput)
    e.preventDefault()
    const newPartnerPut = { ...adminInput }
    if (partnerImage) {
      const fd = new FormData()
      const filename = Date.now() + partnerImage.name
      fd.append('partner_img', partnerImage, filename)
      newPartnerPut.partner_img = filename
      try {
        await axios.post(`${process.env.REACT_APP_URL_API}/upload`, fd)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_URL_API}/partners/${idPartnerToUpdate}`,
        newPartnerPut
      )
      // if (res){
      console.log('res update', res)
      setResMessage(res.data.message)
      setRefresh(!refresh)
      setTimeout(closeForm, 2500)
      setUpdateAlert(true)
    } catch (error) {
      // if(error) {
      console.log('logErrUpdate', error.response)
      setResMessage(error.response.data.message)
      // }
    }
  }

  // DELETE a partner
  const deletePartner = (idPartnerToUpdate) => {
    const confirmation = confirm('Voulez-vous supprimer ce partenaire ?')
    if (confirmation) {
      const DeleteData = async () => {
  await axios
      .delete(`${process.env.REACT_APP_URL_API}/partners/${idPartnerToUpdate}`)
      .then(resToBack => {
        console.log('res delete', resToBack)
        setResMessage(resToBack.data.message)
        setRefresh(!refresh)
        setTimeout(closeForm, 2500)
      })
      .catch(error => {
        if (error) {
          console.log('logErrDelete', error.response)
          setResMessage(error.response.data.message)
        }
      })
  }
  DeleteData()
  setDeleteAlert(true)
}}
  //----------------------------------------------------------------------------
  // Functions to display forms
  const showCreateForm = () => {
    setAdminInput({}) // clear inputs
    setCreateForm(true) // open createForm
    setUpdateForm(false) // close updateForm
  }
  const showUpdateForm = e => {
    setCreateForm(false) // close createForm
    setUpdateForm(true) // open updateForm
    setIdPartnerToUpdate(e.target.id) // auto-trigger getPartner
  }
  const closeForm = () => {
    setCreateForm(false) // close createForm
    setUpdateForm(false) // close updateForm
    setAdminInput({}) // clear inputs
    setIdPartnerToUpdate('') // clear selected partner
    setPartnerImage() // clear image input
    setResMessage('') // clear message
  }
  //Function to update inputs
  const onChangeHandler = useCallback(
    ({ target: { name, value } }) =>
      console.log('inputChange') ||
      setAdminInput(state => ({ ...state, [name]: value }), [])
  )
  //----------------------------------------------------------------------------
  return (
    <div className='adminContainer flex row'>
      <AdminLeftMenu />
      <div className='adminMenuRight flex col'>
        <div className='adminHeader'>
          Bienvenue dans l&apos;espace administration !
        </div>
        <div className='topDiv'>
          <AdminTopDiv elmt={'partenaires'} addElement={showCreateForm} />
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {partners.length === 0 ? (
                <div className='noCard'>
                  Il n&apos;y a pas encore d&apos;élement à afficher ! Merci de
                  créer un nouvel élément !
                </div>
              ) : (
                partners.map(elmt => (
                  <AdminCard
                    key={elmt.partner_id}
                    id={elmt.partner_id}
                    name={elmt.partner_name}
                    updateElement={showUpdateForm}
                    deleteCard={deletePartner}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className='bottomDiv flex col jcc aic'>
          {createForm && (
            <>
              <AdminFormPartnerCreate
                closeForm={closeForm}
                onChangeHandler={onChangeHandler}
                postPartner={postPartner}
                resMessage={resMessage}
                setAdminInput={setAdminInput}
                setPartnerImage={setPartnerImage}
                addAlert={addAlert}
              />
            </>
          )}
          {updateForm && (
            <>
              <AdminFormPartnerUpdate
                adminInput={adminInput}
                closeForm={closeForm}
                deletePartner={deletePartner}
                onChangeHandler={onChangeHandler}
                resMessage={resMessage}
                setAdminInput={setAdminInput}
                setPartnerImage={setPartnerImage}
                updatePartner={updatePartner}
               updateAlert={updateAlert}
              />
            </>
          )}
          <Snackbar
            open={deleteAlert}
            autoHideDuration={6000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Alert severity='success'>
              Partenaire supprimé avec succès
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  )
}

export default AdminPartner
