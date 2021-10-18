// import FormTinyActivity from '../../components/Form/FormTinyActivity'

import './form.css'

const ActivAdmin = ({
  adminInput,
  onChangeHandler,
  poles,
  resMessage,
  setActivityImage,
  setAdminInput
  // confirmTiny,
  // setConfirmTiny
}) => {
  return (
    <div className='FormContainer'>
      <div className='FormList formActivity'>
        <form
          encType='multipart/form-data'
          className='formItems formItemsActivity'
        >
          <label>
            Pôle d'affectation
            <select
              key='pole'
              name='pole'
              value={adminInput && adminInput.pole_id && adminInput.pole_id}
              onChange={onChangeHandler}
              style={{
                width: '50%',
                margin: '15px',
                border: 'solid 1px black',
                background: '#CED4DA'
              }}
            >
              {poles.map(pole => (
                <option key={pole.id} name={pole.pole_name} value={pole.id}>
                  {pole.pole_name}
                </option>
              ))}
            </select>
          </label>
          <input
            focus
            placeholder={`Nom de l'activité`}
            key='activity_title'
            name='activity_title'
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
            key='activity_img_upload'
            name='activity_img_upload'
            onChange={e => {
              setActivityImage(e.target.files[0]) ||
                setAdminInput(state => ({
                  ...state,
                  ['activity_img']: e.target.files[0].name
                }))
            }}
          />
          {adminInput && adminInput.id && (
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
          )}
          <input
            focus
            placeholder={`Description de l'activité`}
            key='activity_desc'
            name='activity_desc'
            onChange={onChangeHandler}
            value={
              adminInput && adminInput.activity_desc && adminInput.activity_desc
            }
          />
          {/* <FormTinyActivity
            adminInput={adminInput}
            setAdminInput={setAdminInput}
            confirmTiny={confirmTiny}
            setConfirmTiny={setConfirmTiny}
            syle={{}}
          /> */}
          <span className='formError'>{resMessage && resMessage}</span>
        </form>
      </div>
    </div>
  )
}

export default ActivAdmin
