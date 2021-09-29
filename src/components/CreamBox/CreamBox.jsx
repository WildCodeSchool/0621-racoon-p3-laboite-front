

import './CreamBox.css'
import '../../App.css'

const CreamBox = ({title, text, pictures}) => {
  console.log(text)
  return (
    <div className='titleCreamContainer'>
      <div className='titleRedLine'>
        <h2 className='cream'>{title}</h2>
        <div className='creamWrapper'>
          <div className='flex creamLeftBlock'>
            {pictures.map((img,index) => (<img key={index} src={img} alt='fistbump'/>))}
          </div>
          <div className='flex creamRightBlock'>
            {text.map((txt,index) => (<p key={index} className='redQuote'>{txt}</p>))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreamBox
