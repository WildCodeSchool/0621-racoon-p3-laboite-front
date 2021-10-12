import parse from 'html-react-parser'
import '../../App.css'
import './FuncPole.css'

const FuncPole = ({ pole_func, pole_func_img, pole_title }) => {
  return (
    <section className='greenContainer'>
      <div className='titleContainer'>
        <div className='titleLigns'>
          <h2 className='green'>Le fonctionnement</h2>
        </div>
      </div>
      <div className='bothGreenContainer'>
        <div className='leftGreenContainer'>
          <p className='creamLeftAlign'>{parse(pole_func)}</p>
        </div>
        <div className='rightGreenContainer'>
          <img className='greenSection' src={`${process.env.REACT_APP_URL_API}/static/images/${pole_func_img}`} alt={pole_title} />
        </div>
      </div>
    </section>
  )
}

export default FuncPole
