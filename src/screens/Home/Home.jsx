import React from 'react'

import Austin from '../../assets/austin.jpeg'
import AustinP from '../../assets/austin-powers.jpeg'
import Duo from '../../assets/duo.jpeg'
import DrEvil from '../../assets/dr-evil.jpeg'
import Mini from '../../assets/mini-me.jpg'
import Mini2 from '../../assets/mini-2.jpeg'
import Mustafa from '../../assets/mustafa.jpeg'
import Number2 from '../../assets/number-2.jpeg'
import Power from '../../assets/power.jpeg'
import ruban from '../../assets/rubanHome.png'
import beach from '../../assets/blere-beach.png'

import './Home.css'

const Home = () => {
  return (
    <>
      <div className='homeContainer'>
        <img
          style={{ width: '100%', height: '400px', marginBottom: '50px' }}
          src={beach}
          alt='blere-beach'
        />
        <img src={ruban} alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti{' '}
          <br /> ratione commodi unde consequuntur! Eaque, laudantium nobis aut
          blanditiis culpa recusandae illum? Vero,
          <br /> at saepe? Veniam quaerat soluta animi eveniet facilis!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Corrupti ratione commodi unde consequuntur! Eaque, laudantium nobis
          aut blanditiis culpa <br />
          recusandae illum? Vero, at saepe? Veniam quaerat soluta animi eveniet
          facilis!
        </p>
        <div className='conceptContainer'>
          <div className='titleContainer'>
            <h2 className='conceptTitle'><span>Le Concept</span></h2>
          </div>
          <div className='conceptPart'>
            <div className='part1'>
              <img
                src={Duo}
                alt='powers'
                style={{ width: '45%', height: '50vh' }}
              />
              <p className='conceptP'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ratione commodi unde consequuntur! Eaque, laudantium
                nobis aut blanditiis culpa recusandae illum? Vero, at saepe?
                Veniam quaerat soluta animi eveniet facilis! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti ratione commodi
                unde consequuntur! Eaque, laudantium nobis aut blanditiis culpa
                recusandae illum? Vero, at saepe? Veniam quaerat soluta animi
                eveniet facilis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti ratione commodi unde consequuntur!
                Eaque, laudantium nobis aut blanditiis culpa recusandae illum?
                Vero, at saepe? Veniam quaerat soluta animi eveniet facilis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ratione commodi unde consequuntur! Eaque, laudantium
                nobis aut blanditiis culpa recusandae illum? Vero, at saepe?
                Veniam quaerat soluta animi eveniet facilis! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti ratione commodi
                unde consequuntur! Eaque, laudantium nobis aut blanditiis culpa
                recusandae illum? Vero, at saepe? Veniam quaerat soluta animi
                eveniet facilis!
              </p>
            </div>
            <div className='part2'>
              <p className='conceptP'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ratione commodi unde consequuntur! Eaque, laudantium
                nobis aut blanditiis culpa recusandae illum? Vero, at saepe?
                Veniam quaerat soluta animi eveniet facilis! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti ratione commodi
                unde consequuntur! Eaque, laudantium nobis aut blanditiis culpa
                recusandae illum? Vero, at saepe? Veniam quaerat soluta animi
                eveniet facilis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti ratione commodi unde consequuntur!
                Eaque, laudantium nobis aut blanditiis culpa recusandae illum?
                Vero, at saepe? Veniam quaerat soluta animi eveniet facilis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ratione commodi unde consequuntur! Eaque, laudantium
                nobis aut blanditiis culpa recusandae illum? Vero, at saepe?
                Veniam quaerat soluta animi eveniet facilis! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti ratione commodi
                unde consequuntur! Eaque, laudantium nobis aut blanditiis culpa
                recusandae illum? Vero, at saepe? Veniam quaerat soluta animi
                eveniet facilis!
              </p>
              <img
                src={AustinP}
                alt='powers'
                style={{ width: '45%', height: '50vh' }}
              />
            </div>
            <div className='part3'>
              <img
                src={Mini}
                alt='powers'
                style={{ width: '45%', height: '50vh' }}
              />
              <p className='conceptP'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ratione commodi unde consequuntur! Eaque, laudantium
                nobis aut blanditiis culpa recusandae illum? Vero, at saepe?
                Veniam quaerat soluta animi eveniet facilis! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti ratione commodi
                unde consequuntur! Eaque, laudantium nobis aut blanditiis culpa
                recusandae illum? Vero, at saepe? Veniam quaerat soluta animi
                eveniet facilis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti ratione commodi unde consequuntur!
                Eaque, laudantium nobis aut blanditiis culpa recusandae illum?
                Vero, at saepe? Veniam quaerat soluta animi eveniet facilis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ratione commodi unde consequuntur! Eaque, laudantium
                nobis aut blanditiis culpa recusandae illum? Vero, at saepe?
                Veniam quaerat soluta animi eveniet facilis! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti ratione commodi
                unde consequuntur! Eaque, laudantium nobis aut blanditiis culpa
                recusandae illum? Vero, at saepe? Veniam quaerat soluta animi
                eveniet facilis!
              </p>
            </div>
          </div>
        </div>
        <div className='poles'>
          <div className='poleTitleContainer'>
            <h2 className='poleTitle'>
              <span> Les pôles d'activité </span>
            </h2>
          </div>
          <div className='polesContainer'>
            <img className='imgPoles' src={Austin} alt='powers' />
            <img className='imgPoles' src={DrEvil} alt='powers' />
            <img className='imgPoles' src={Power} alt='powers' />
          </div>
        </div>
        <div className='teamContainer'>
          <div className='teamTitleContainer'>
            <h2 className='teamTitle'>
              <span> L'équipe </span>
            </h2>
          </div>
          <div className='membersContainer'>
            <div className='teamMember'>
              <img className='imgTeam' src={Mustafa} alt='powers' />
              <h1 className='memberName'>Nom</h1>
              <h2 className='jobName'>Job</h2>
            </div>
            <div className='teamMember'>
              <img className='imgTeam' src={Number2} alt='powers' />
              <h1 className='memberName'>Nom</h1>
              <h2 className='jobName'>Job</h2>
            </div>
            <div className='teamMember'>
              <img className='imgTeam' src={Mini2} alt='powers' />
              <h1 className='memberName'>Nom</h1>
              <h2 className='jobName'>Job</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
