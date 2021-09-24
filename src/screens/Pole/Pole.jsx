import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

import ActivitiesPole from '../../components/ActivitiesPole/ActivitiesPole'
import BottomCenter from '../../components/BottomCenter/BottomCenter'
import FuncPole from '../../components/FuncPole/FuncPole'
import RubanPole from './../../components/RubanPole/RubanPole'
import TopCenter from './../../components/TopCenter/TopCenter'
import './Pole.css'

const Pole = () => {
  const [poleData, setPoleData] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    console.log(id)
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4000/pole/${id}`)
      setPoleData(results.data)
      setLoading(false)
    }
    recupData()
  }, [id])

  return loading ? (
    <div className='loaderContainer'>
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  ) : (
    <>
      <div className='banner'>
        <img src={poleData.pole_banner} />
      </div>
      <div className='centerContainer'>
        <div>
          <RubanPole picto={poleData.pole_picto} title={poleData.pole_title} />
        </div>
        <TopCenter {...poleData} />
        <FuncPole {...poleData} />
        <div className='titleCreamContainer'>
          <div className='titleRedLigns'>
            <h2 className='cream'>Services proposés</h2>
          </div>
        </div>
        <div>
          {/* pour acceder a un tableau de tableau faire un loading */}
          {poleData.activities.map(activity => (
            <ActivitiesPole key={activity.id} {...activity} />
          ))}
        </div>
        <BottomCenter />
      </div>
    </>
  )
}

export default Pole
