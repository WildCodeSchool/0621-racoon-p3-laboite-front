import '../../App.css'
import './ActivitiesPole.css'

const ActivitiesPole = ({ activity_desc, activity_img }) => {
  return (
<<<<<<< HEAD
    <div className='centerContainer'>
      <section className='activitiesContainer'>
        <div className='bothCreamContainer'>
          <div className='leftCreamContainer'>
            <img className='creamSection' src={activity_img} alt='services' />
          </div>
          <div className='rightCreamContainer'>
            <p className='redLeftAlign'>{activity_desc}</p>
          </div>
=======
    <section className='activitiesContainer'>
      <div className='bothCreamContainer'>
        <div className='leftCreamContainer'>
          <img className='creamSection' src={activity_img} alt='services' />
        </div>
        <div className='rightCreamContainer'>
          <p className='redLeftAlign'>{activity_desc}</p>
>>>>>>> e7168e0c9a37a6a69ed0b5204a7e1a2c23afb8f8
        </div>
      </div>
    </section>
  )
}

export default ActivitiesPole
