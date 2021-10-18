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
      <div className='FormList formTeam'>
        <form encType='multipart/form-data' className='formItems formItemsTeam'>
          <label>
            Pôle d'affectation
            <select
              placeholder='Les poles'
              key='pole_id'
              name='pole_id'
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
