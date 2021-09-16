import React from 'react'

import ruban from '../../assets/rubanHome.png'

import './Home.css'

const Home = () => {
  return (
    <>
      <div className='homeContainer'>
        <img src='' alt='' />
        <img src={ruban} alt='' />
        <p></p>
        <div className='conceptContainer'>
          <div className='part-1'>
            <img src='' alt='' />
            <p></p>
          </div>
          <div className='part-2'>
            <p></p>
            <img src='' alt='' />
          </div>
          <div className='part-3'>
            <img src='' alt='' />
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
