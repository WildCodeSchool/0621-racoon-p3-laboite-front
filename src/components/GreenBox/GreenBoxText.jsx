import './GreenBox.css'
import '../../App.css'

const GreenBoxText = ({ greenText }) => {
  return (
    <div className='greenWrapper'>
      <div className='green paragraph'>
        {greenText.map((txt, index) => (
          <p key={index}>{txt}</p>
        ))}
      </div>
    </div>
  )
}

export default GreenBoxText
