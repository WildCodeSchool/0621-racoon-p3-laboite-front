const AdminLeftBtn = ({ btn }) => {
  return (
    <div className='adminLeftButton flex row'>
      <div className='logoContainer'>
        <div className='logo flex jcc aic'>A</div>
      </div>
      <div className='btnName flex jcc aic'>{btn}</div>
    </div>
  )
}

export default AdminLeftBtn
