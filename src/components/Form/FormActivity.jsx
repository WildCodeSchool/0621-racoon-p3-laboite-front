import FormTiny from './FormTiny'

const FormActivity = ({
  setAdminInput,
  adminInput,
  setImage,
  onChangeHandler,
  pole,
  setData,
  setConfirmTiny,
  submitData,
  confirmTiny
}) => {
  return (
    <div className='activityContainer'>
      <h3 className='activityTitleForm'>Nouvelle activité</h3>
      <div className='activityFormWrapper'>
        <div className='activityItems'>
          <div className='activityCross'>
            {/* -----select Pole Start-----  */}
            {/* -------------------FORM---------------------  */}
            <form encType='multipart/form-data'>
              <div className='activityForm'>
                <div className='activityCross'>
                  <select
                    placeholder='Les poles'
                    onChange={e =>
                      setAdminInput({ ...adminInput, pole: e.target.value })
                    }
                    style={{
                      width: '50%',
                      margin: '15px',
                      border: 'solid 1px black',
                      background: '#CED4DA'
                    }}
                  >
                    {pole.map(pole => (
                      <option name={pole.pole_title} value={pole.id}>
                        {pole.pole_title}
                      </option>
                    ))}
                  </select>
                  {/* -----select Pole End-----  */}
                </div>
                <input
                  focus
                  type='text'
                  placeholder={`Titre de l'activité`}
                  key='activity_title'
                  name='activity_title'
                  style={{
                    margin: '10px',
                    border: 'solid 1px black',
                    background: '#CED4DA'
                  }}
                  onChange={onChangeHandler}
                  value={adminInput.activity_title}
                />
                {/* --------------FILE-------------  */}
                <input
                  type='file'
                  focus
                  placeholder={`URL de l'image`}
                  key='activity_img'
                  name='activity_img'
                  accept='jpg'
                  style={{
                    margin: '10px',
                    border: 'solid 1px black',
                    background: '#CED4DA'
                  }}
                  onChange={e => {
                    setImage(e.target.files[0])
                  }}
                />
              </div>
            </form>
            <FormTiny setData={setData} setConfirmTiny={setConfirmTiny} syle={{}} />
            {/* <input
              focus
              placeholder={`Prix de l'activité`}
              style={{
                margin: '10px',
                border: 'solid 1px black',
                background: '#CED4DA'
              }}
              key='field5'
              name='field5'
              onChange={onChangeHandler}
              value={adminInput.field5}
            /> */}
            <div className='activityButton'>
              <p style={{ color: 'white' }}>
                Penser à confirmer avant de publier
              </p>
              {confirmTiny ? (
                <button
                  onClick={submitData}
                  disabled={!confirmTiny}
                  style={{
                    cursor: 'pointer',
                    background: '#868E96',
                    border: 'solid 1px black'
                  }}
                >
                  Publier
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormActivity
