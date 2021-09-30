import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function FormTiny({ setData }) {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      const text = editorRef.current.getContent()
      setData(text)
    }
  }
  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 400,
          width: 700,
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
      <button style={{ marginTop: '15px' }} onClick={log}>Publier</button>
    </div>
  )
}
