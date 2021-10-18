import '../form.css'

const PartnerAdmin = ({
  adminInput,
  onChangeHandler,
  resMessage,
  setPartnerImage,
  setAdminInput
}) => {
  return (
    <div className='FormContainer'>
      <div className='FormList formPartner'>
        <form
          encType='multipart/form-data'
          className='formItems formItemsPartner'
        >
          <input
            focus
            placeholder={'Nom du partenaire'}
            key='partner_name'
            name='partner_name'
            onChange={onChangeHandler}
            value={
              adminInput && adminInput.partner_name && adminInput.partner_name
            }
          />
          <input
            type='file'
            focus
            placeholder={'Uploader une photo'}
            key='partner_img_upload'
            name='partner_img_upload'
            onChange={e => {
              setPartnerImage(e.target.files[0]) ||
                setAdminInput(state => ({
                  ...state,
                  ['partner_img']: e.target.files[0].name
                }))
            }}
          />
          {adminInput && adminInput.partner_id && (
            <input
              focus
              placeholder={'Fichier image'}
              key='partner_img'
              name='partner_img'
              onChange={onChangeHandler} // removed to prevent manual modification
              value={
                adminInput && adminInput.partner_img && adminInput.partner_img
              }
            />
          )}
          <span className='formError'>{resMessage && resMessage}</span>
        </form>
      </div>
    </div>
  )
}

export default PartnerAdmin
