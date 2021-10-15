import { updateExpression } from '@babel/types'
import PutTinyActivity from './PutTinyActivity'

const FormModifyActivity = ({
  setPutImage,
  setDataPut,
  setConfirmTiny,
  modifyData,
  confirmTiny,
  activityUpdate,
  modifyValue
}) => {
  return (
    <div className='activityContainer'>
      <h3 className='activityTitleForm'>Modifier l'activité</h3>
      <div className='activityFormWrapper'>
        <div className='activityItems'>
          <div className='activityCross'>
            {/* -----select Pole Start-----  */}
            {/* -------------------FORM---------------------  */}
            <form encType='multipart/form-data'>
              <div className='activityForm'>
                <label
                  style={{
                    color: '#fff'
                  }}
                >
                  Titre de l&apos;activité
                </label>
                <input
                  focus
                  type='text'
                  // placeholder={`Titre de l'activité`}
                  key='activity_title'
                  name='activity_title'
                  style={{
                    margin: '10px',
                    border: 'solid 1px black',
                    background: '#CED4DA'
                  }}
                  value={activityUpdate.activity_title}
                  onChange={e => modifyValue(e.target.name, e.target.value)}
                />
                {/* --------------FILE-------------  */}
                <input value={activityUpdate.activity_img} />
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
                    setPutImage(e.target.files[0])
                  }}
                />
              </div>
            </form>
            <PutTinyActivity
              setDataPut={setDataPut}
              activityUpdate={activityUpdate}
              setConfirmTiny={setConfirmTiny}
            />
            <div className='activityButton'>
              <p style={{ color: 'white' }}>
                Penser à confirmer avant de publier
              </p>
              {confirmTiny ? (
                <button
                  onClick={modifyData}
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

export default FormModifyActivity
