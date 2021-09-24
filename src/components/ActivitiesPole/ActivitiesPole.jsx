import '../../App.css'
import './ActivitiesPole.css'

const ActivitiesPole = ({ activity_desc, activity_img }) => {
  return (
    <div className='centerContainer'>
      <section className='activitiesContainer'>
        <div className='titleCreamContainer'>
          <div className='titleRedLigns'>
            <h2 className='cream'>Services proposés</h2>
          </div>
        </div>
        <div className='bothCreamContainer'>
          <div className='leftCreamContainer'>
            <img className='creamSection' src={activity_img} alt='services' />
          </div>
          <div className='rightCreamContainer'>
            <p className='redLeftAlign'>{activity_desc}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ActivitiesPole
