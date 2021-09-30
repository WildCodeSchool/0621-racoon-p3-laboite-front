import './Admin.css'

const AdminForm = () => {
  return (
    <div className='form flex col jcc aic'>
      <div className='bottomDivTitle'>Formulaire</div>
      <input className='boxInput' />
      <input className='boxInput' />
      <input className='boxInput' />
      <input className='boxInput' />
      <input className='boxInput' />
      <div className='btnContainer flex row aic'>
        <button>Modifier</button>
        <button>Sauvegarder</button>
      </div>
    </div>
  )
}

export default AdminForm
