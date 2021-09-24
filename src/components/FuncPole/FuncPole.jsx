import '../../App.css'
import './FuncPole.css'

const FuncPole = ({ pole_func, pole_func_img, pole_title }) => {
  return (
    <section className='greenContainer'>
      <div className='titleContainer'>
        <div className='titleLigns'>
          <h2 className='green'>Le fonctionnement</h2>
        </div>
<<<<<<< HEAD
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
=======
      </div>
      <div className='bothGreenContainer'>
        <div className='leftGreenContainer'>
          <p className='creamLeftAlign'>{pole_desc}</p>
>>>>>>> e7168e0c9a37a6a69ed0b5204a7e1a2c23afb8f8
        </div>
        <div className='rightGreenContainer'>
          <img className='greenSection' src={pole_func_img} alt={pole_title} />
        </div>
      </div>
    </section>
  )
}

export default FuncPole
