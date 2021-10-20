import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function FormTiny({
  setData,
  setConfirmTiny,
  confirmTiny,
  handleEditorChange
}) {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      const text = editorRef.current.getContent()
      setData(text)
      setConfirmTiny(true)
    }
  }

  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>This is the initial content of the editor.</p>'
        onChange={handleEditorChange}
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
        onClick={log}
      >
        Cliquer ici pour confirmer la description avant publication
      </button>
      <div className={confirmTiny ? 'tinyYes' : 'tinyNo'}></div>
    </div>
  )
}
