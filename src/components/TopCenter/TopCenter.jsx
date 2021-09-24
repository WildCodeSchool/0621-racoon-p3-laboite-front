import '../../App.css'
import './TopCenter.css'

const TopCenter = ({ pole_desc }) => {
  return (
    <section className='centerContainer'>
      <h4>LA BOÎTE D’À CÔTÉ</h4>
      <p>{pole_desc}</p>
    </section>
  )
}

export default TopCenter
