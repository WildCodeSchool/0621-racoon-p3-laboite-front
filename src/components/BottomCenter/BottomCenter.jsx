import '../../App.css'
import './BottomCenter.css'

const BottomCenter = ({ pole_num, pole_email }) => {
  return (
    <div className='centerContainer'>
      <section className='bottomCenter'>
        <h4>LA BOÎTE D’À CÔTÉ, Y A QU’À DEMANDER !</h4>
        <p>{pole_num}</p>
        <p>{pole_email}</p>
      </section>
    </div>
  )
}

export default BottomCenter
