import parse from 'html-react-parser'

import '../../App.css'

const TopCenter = ({ pole_desc }) => {
  return (
    <section className='centerContainer'>
      <h4>LA BOÎTE D’À CÔTÉ</h4>
      <p>{parse(pole_desc)}</p>
    </section>
  )
}

export default TopCenter
