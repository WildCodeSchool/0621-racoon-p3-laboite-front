// import '../Ruban/Ruban.css'
import './RubanPole.css'

const RubanPole = ({ picto, title }) => {
  return (
    <div className='ruban'>
      <div className='rubanPicto pole'>{picto}</div>
      <h2 className='rubanTitle'>{title}</h2>
    </div>
  )
}

export default RubanPole
