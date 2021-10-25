import './GreenBox.css'
import '../../App.css'

const GreenBox = ({ greenTitle, greenText, greenPic }) => {
  return (
    <div className='titleGreenContainer'>
      <div className='titleLine'>
        <h2 className='green'>{greenTitle}</h2>
        <div className='greenWrapper'>
          <div className='flex greenLeftBlock'>
            {greenPic.map((pic, index) => (
              <img
                key={index}
                src={`${process.env.REACT_APP_URL_API}/static/images/${pic}`}
                alt={pic}
              />
            ))}
          </div>
          <div className='flex greenRightBlock'>
            {greenText.map((txt, index) => (
              <p key={index}>{txt}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GreenBox
