import parse from 'html-react-parser'

import '../../App.css'
import './ActivitiesPole.css'

const ActivitiesPole = ({ activity_desc, activity_img }) => {
  return (
    <section className='activitiesContainer'>
      <div className='bothCreamContainer'>
        <div className='leftCreamContainer'>
          <img
            className='creamSection'
            src={`${process.env.REACT_APP_URL_API}/static/images/${activity_img}`}
            alt='services'
          />
        </div>
        <div className='rightCreamContainer'>
          <p className='redLeftAlign'>{parse(activity_desc)}</p>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesPole
