const Concept = ({ concept }) => {
  return (
    <div className='conceptContainer'>
      <div className='titleContainer'>
        <h2 className='conceptTitle'>
          <span>Le Concept</span>
        </h2>
      </div>
      <div className='conceptPart'>
        <div className='part1'>
          <img
            src={concept.concept_img1}
            alt='jardinerie'
            style={{ width: '50%', height: '50vh' }}
          />
          <div className='conceptP1'>
            <p>{concept.concept_txt1_p1}</p>
            <p style={{ textDecoration: 'underline', fontStyle: 'italic' }}>
              {concept.link_tzc}
            </p>
            <p style={{ fontWeight: 'lighter' }}>{concept.concept_txt1_p2}</p>
            <div className='block-buster'>
              <div className='borderText'></div>
              <p className='borderP'>{concept.concept_txt1_p3}</p>
            </div>
          </div>
        </div>
        <div className='part2'>
          <div className='conceptP2'>
            <div className='block-buster'>
              <div className='borderText'></div>
              <p className='borderP'>{concept.concept_txt2_p1}</p>
            </div>
            <div className='block-buster'>
              <div className='borderText'></div>
              <p className='borderP'>{concept.concept_txt2_p2}</p>
            </div>
            <p style={{ fontWeight: '600' }}>{concept.concept_txt2_p3}</p>
          </div>
          <img
            src={concept.concept_img2}
            alt='vendange'
            style={{ width: '50%', height: '50vh' }}
          />
        </div>
        <div className='part3'>
          <img
            src={concept.concept_img3}
            alt='livraison'
            style={{ width: '50%', height: '50vh' }}
          />
          <div className='conceptP3'>
            <p className='borderP'>{concept.concept_txt3_p1}</p>
            <p
              style={{ fontStyle: 'italic', fontWeight: '100' }}
              className='borderP'
            >
              {concept.concept_txt3_p3}
            </p>
            <p className='borderP'>{concept.concept_txt3_p2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Concept
