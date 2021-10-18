import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function FormTiny({
  adminInput,
  setAdminInput,
  confirmTiny,
  setConfirmTiny
}) {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      const text = editorRef.current.getContent()
      setConfirmTiny(true)
      setAdminInput({ ...adminInput, activity_desc: text })
    }
    console.log(adminInput)
  }

  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 400,
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
      <button
        style={{
          cursor: 'pointer',
          marginTop: '20px',
          background: '#868E96',
          border: '1px solid black'
        }}
        onClick={console.log('confirm') || log}
      >
        Confirmer
      </button>
    </div>
  )
}
