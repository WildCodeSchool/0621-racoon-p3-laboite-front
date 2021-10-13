import './CreamBox.css'
import '../../App.css'

const CreamBox = ({ creamTitle, creamText, creamPic }) => {
  return (
    <div className='titleCreamContainer'>
      <div className='titleRedLine'>
        <h2 className='cream'>{creamTitle}</h2>
        <div className='creamWrapper'>
          <div className='flex creamLeftBlock'>
            {creamPic.map((pic, index) => (
              <img
                key={index}
                src={`${process.env.REACT_APP_URL_API}/static/images/${pic}`}
                alt={pic}
              />
            ))}
          </div>
          <div className='flex creamRightBlock'>
            {creamText.map((txt, index) => (
              <p key={index}>{txt}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreamBox
