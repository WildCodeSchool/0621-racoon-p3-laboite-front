import axios from 'axios'
import { useState, useEffect } from 'react'

// import PoleAdmin from './PoleAdmin'
import AdminCard from '../../components/Admin/AdminCard'
import AdminForm from '../../components/Admin/AdminForm'
import AdminLeftMenu from '../../components/Admin/AdminLeftMenu'
import AdminTopDiv from '../../components/Admin/AdminTopDiv'

//-------------------------------------
// import PoleFormPost from ''
import PoleFormPost from './PoleFormPost'
import PoleFormPut from './PoleFormPut'
//--------------------------------------

import './Admin.css'
import PoleAdmin from './PoleAdmin'

const AdminPole = () => {
  const [poleCards, setPoleCards] = useState([])
  const [showFormPost, setShowFormPost] = useState(false)
  const [showFormPut, setShowFormPut] = useState(false)
  const [poleCardUpdate, setPoleCardUpdate] = useState({})
  // List of poles NOT from backEnd (test only)
  // let notbackpole = ['Conciergerie', 'Végétal', 'Recyclerie']
  // const [poles, setPoles] = useState(notbackpole)

  // List of poles from backEnd
  const [poles, setPoles] = useState([])
  useEffect(() => {
    const getPoles = async () => {
      const results = await axios.get(`${process.env.REACT_APP_URL_API}/poles`)
      // console.log(results.data)
      setPoles(results.data)
    }
    getPoles()
  }, [])

  //-------------------------------------------------------

  const showFormOnClick = () => {
    setShowFormPost(true)
  }

  //--- get API data in cardList  and stock in poleCards ---//
  const poleData = async () => {
    const results = await axios.get(`http://localhost:4000/poles`)
    setPoleCards(results.data)
  }
  useEffect(() => {
    // pole data retrieve all the pole cards
    poleData()
  }, [])

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
        await axios.delete(`http://localhost:4000/poles/${id}`)
        setPoleCards(poleCards.filter(poleCard => poleCard.id != id))
      }
      DeleteData()
    }
  }

  //--- function that get the card you want to modify ---//
  //---  and stock it in poleCardUpdate ---//
  const modifyCard = id => {
    const modifyData = async () => {
      const results = await axios.get(`http://localhost:4000/poles/admin/${id}`)
      setPoleCardUpdate(results.data[0])
      setShowFormPut(true)
    }
    modifyData()
  }
  //-----------------------------------------------

  // Variable to check if form is open
  const [isOpenForm, setIsOpenForm] = useState(false)
  // Function to add a new element to list
  const addElement = () => {
    setPoles(poles.concat('Nouveau'))
  }
  // Function to remove an element from list
  const removeElement = () => {
    setPoles(poles.pop())
  }
  // Function to display form
  const displayForm = e => {
    let myClass = e.target.className
    console.log('class', myClass)
    setIsOpenForm(true)
    localStorage.setItem('IsOpenForm', true)
    // console.log(isOpenForm, JSON.parse(localStorage.getItem('isOpenForm')))
  }

  return (
    <div className='adminContainer flex row'>
      <AdminLeftMenu />
      {/* <PoleAdmin /> */}
      <div className='adminMenuRight flex col'>
        <div className='adminHeader'>
          Bienvenue dans l&apos;espace administration !
        </div>
        <div className='topDiv'>
          <AdminTopDiv elmt={'pôles'} addElement={showFormOnClick} />
          <div className='bg'>
            <div className='cardContainer flex row aic'>
              {poleCards.length === 0 ? (
                <div className='noCard'>
                  Il n&apos;y a pas encore d&apos;élement à afficher ! Merci de
                  créer un nouvel élément !
                </div>
              ) : (
                poleCards.map((elmt, index) => (
                  <AdminCard
                    key={index}
                    id={elmt.id}
                    name={elmt.pole_name}
                    img={elmt.pole_miniature_img}
                    displayForm={displayForm}
                    removeElement={removeElement}
                    deleteCard={deleteCard} //POULET 01-------------
                    modifyCard={modifyCard} //POULET 02------------
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className='bottomDiv flex col jcc aic'>
          {/* {isOpenForm && (
            <> */}
          {showFormPost ? <PoleFormPost poleData={poleData} /> : null}
          {showFormPut
            ? console.log('----poluet-------', poleCardUpdate) || (
                <PoleFormPut
                  pcu={{...poleCardUpdate}}
                  modifyValue={modifyValue}
                  poleData={poleData}
                />
              )
            : null}
          {/* <AdminForm displayForm={displayForm} />
              <div>PoleAdmin</div> */}
          {/* </> */}
          {/* )} */}
        </div>
      </div>
    </div>
  )
}

export default AdminPole
