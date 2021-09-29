import './GreenBox.css'
import '../../App.css'

const GreenBox = ({ title, text, pictures }) => {
  console.log(text)
  return (
    <div className='titleGreenContainer'>
      <div className='titleLine'>
        <h2 className='green'>{title}</h2>
        <div className='greenWrapper'>
          <div className='flex greenLeftBlock'>
            {pictures.map((img, index) => (
              <img key={index} src={img} alt='fistbump' />
            ))}
          </div>
          <div className='flex greenRightBlock'>
            {text.map((txt, index) => (
              <p key={index} className='redQuote'>
                {txt}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GreenBox
