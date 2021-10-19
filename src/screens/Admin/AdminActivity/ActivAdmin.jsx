import React, { useRef, useContext } from 'react'
import { Editor } from '@tinymce/tinymce-react'

import '../form.css'

import { Context } from '../../../context/Context'

const ActivAdmin = ({
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

  // function checkIfDirty() {
  //   if (editorRef.current.isDirty()) {
  //     setConfirmTiny(false)
  //   }
  // }
  // setInterval(checkIfDirty, 2000) // check every 2 seconds.

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
              adminInput && adminInput.activity_desc ? (
                adminInput.activity_desc
              ) : (
                <p>This is the initial content of the editor.</p>
              )
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

export default ActivAdmin
