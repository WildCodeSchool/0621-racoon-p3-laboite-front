import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

import '../form.css'

const ActivityAdmin = ({
  adminInput,
  onChangeHandler,
  poles,
  resMessage,
  setActivityImage,
  setAdminInput,
  confirmTiny,
  setConfirmTiny
}) => {
  const editorRef = useRef(null)
  const log = e => {
    e.preventDefault()
    if (editorRef.current) {
      const text = editorRef.current.getContent()
      console.log('text', text)
      setAdminInput(state => ({ ...state, ['activity_desc']: text }), [])
      setConfirmTiny(true)
    }
  }

  // function to check is text has been modified (green/red LED)
  const handleEditorChange = () => {
    setConfirmTiny(false)
  }

  return (
    <div className='FormContainer'>
      <div className='FormList formActivity'>
        <form
          encType='multipart/form-data'
          className='formItems formItemsActivity'
        >
          <label>
            Pôle d&apos;affectation
            <select
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
              onChange={onChangeHandler} // remove to prevent manual modification
              value={
                adminInput && adminInput.activity_img && adminInput.activity_img
              }
            />
          )}
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={
              adminInput && adminInput.activity_desc
                ? adminInput.activity_desc
                : "Description de l'activité"
            }
            init={{
              height: 200,
              width: '100%',
              menubar: false,
              margin: 10,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onChange={handleEditorChange}
          />
          <div className={'flex row jcc aic'}>
            <button
              style={{
                cursor: 'pointer',
                marginTop: '20px',
                background: '#868E96',
                border: '1px solid black'
              }}
              onClick={e => log(e)}
            >
              Cliquer ici pour confirmer la description avant publication
            </button>
            <div className={confirmTiny ? 'tinyYes' : 'tinyNo'}></div>
          </div>
          <span className='formError'>{resMessage && resMessage}</span>
        </form>
      </div>
    </div>
  )
}

export default ActivityAdmin
