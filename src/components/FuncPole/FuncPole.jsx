import '../../App.css'
import './FuncPole.css'

const FuncPole = ({ pole_func, pole_func_img, pole_title }) => {
  return (
    <div className='centerContainer'>
      <section className='greenContainer'>
        <div className='titleContainer'>
          <div className='titleLigns'>
            <h2 className='green'>Le fonctionnement</h2>
          </div>
        </div>
        <div className='bothGreenContainer'>
          <div className='leftGreenContainer'>
            <p className='creamLeftAlign'>{pole_func}</p>
          </div>
          <div className='rightGreenContainer'>
            <img
              className='greenSection'
              src={pole_func_img}
              alt={pole_title}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FuncPole
