import './form.css'

const ActivAdmin = ({
  adminInput,
  onChangeHandler,
  resMessage,
  setActivityImage,
  setAdminInput
}) => {
  return (
    <div className='FormContainer'>
      <div className='FormList formTeam'>
        <form encType='multipart/form-data' className='formItems formItemsTeam'>
          <input
            focus
            placeholder={`Nom de l'activité`}
            key='activity_name'
            name='activity_name'
            onChange={onChangeHandler}
            value={
              adminInput &&
              adminInput.activity_title &&
              adminInput.activity_title
            }
          />
          <input
            type='file'
            focus
            placeholder={'Uploader une photo'}
            key='activity_img'
            name='activity_img'
            onChange={e => {
              setActivityImage(e.target.files[0]) ||
                setAdminInput(state => ({
                  ...state,
                  ['activity_img']: e.target.files[0].title
                }))
            }}
          />
          <input
            focus
            placeholder={'Fichier image'}
            key='activity_img'
            name='activity_img'
            onChange={onChangeHandler} // removed to prevent manual modification
            value={
              adminInput && adminInput.activity_img && adminInput.activity_img
            }
          />
          <span className='formError'>{resMessage && resMessage}</span>
        </form>
      </div>
    </div>
  )
}

export default ActivAdmin
