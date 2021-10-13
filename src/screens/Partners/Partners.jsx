import { useState, useEffect } from 'react'
import axios from 'axios'

import PartnerList from '../../components/PartnerList/PartnerList'
import BottomCenter from '../../components/BottomCenter/BottomCenter'
import CreamBox from '../../components/CreamBox/CreamBox'
import GreenBox from '../../components/GreenBox/GreenBox'
import GreenBoxText from '../../components/GreenBox/GreenBoxText'
import RibbonTitle from '../../components/RibbonTitle/RibbonTitle'

// import homebanner from '../../assets/blere-beach.png'

import './Partners.css'

const Partners = () => {
  const partnersList = ['pink', 'purple', 'orange', 'cyan', 'yellow']
  const partnersFront = [
    'Commune de Bléré, ',
    'Communauté de Communes Bléré-Val de Cher, ',
    `Département d'Indre-et-Loire, `,
    'Région Centre-Val de Loire, ',
    'CRI (Château Renault Insertion), ',
    'Association La Main Tendue (Bléré), ',
    'Pôle Emploi, ',
    'Chambres consulaires, ',
    'Rotary club d’Amboise, ',
    '... '
  ]

  const [partnership, setPartnership] = useState([])
  const [partners, setPartners] = useState([])

  useEffect(() => {
    const getPartnership = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/partnership`)
        .then(res => setPartnership(res.data[0]))
    }
    getPartnership()
  }, [])

  useEffect(() => {
    const getPartners = () => {
      axios
        .get(`${process.env.REACT_APP_URL_API}/partners`)
        .then(res => setPartners(res.data))
    }
    getPartners()
  }, [])

  const topPic = []
  partnership.partnership_top_pic1 &&
    topPic.push(partnership.partnership_top_pic1)
  partnership.partnership_top_pic2 &&
    topPic.push(partnership.partnership_top_pic2)
  partnership.partnership_top_pic3 &&
    topPic.push(partnership.partnership_top_pic3)
  partnership.partnership_top_pic4 &&
    topPic.push(partnership.partnership_top_pic4)
  partnership.partnership_top_pic5 &&
    topPic.push(partnership.partnership_top_pic5)

  const midPic = []
  partnership.partnership_mid_pic1 &&
    midPic.push(partnership.partnership_mid_pic1)
  partnership.partnership_mid_pic1 &&
    midPic.push(partnership.partnership_mid_pic1)
  partnership.partnership_mid_pic1 &&
    midPic.push(partnership.partnership_mid_pic1)
  partnership.partnership_mid_pic4 &&
    midPic.push(partnership.partnership_mid_pic4)
  partnership.partnership_mid_pic5 &&
    midPic.push(partnership.partnership_mid_pic5)
  const botPic = []
  partnership.partnership_bot_pic1 &&
    botPic.push(partnership.partnership_bot_pic1)
  partnership.partnership_bot_pic2 &&
    botPic.push(partnership.partnership_bot_pic2)
  partnership.partnership_bot_pic3 &&
    botPic.push(partnership.partnership_bot_pic3)
  partnership.partnership_bot_pic4 &&
    botPic.push(partnership.partnership_bot_pic4)
  partnership.partnership_bot_pic5 &&
    botPic.push(partnership.partnership_bot_pic5)

  const topText = []
  partnership.partnership_top_txt1 &&
    topText.push(partnership.partnership_top_txt1)
  partnership.partnership_top_txt2 &&
    topText.push(partnership.partnership_top_txt2)
  partnership.partnership_top_txt3 &&
    topText.push(partnership.partnership_top_txt3)
  partnership.partnership_top_txt4 &&
    topText.push(partnership.partnership_top_txt4)
  partnership.partnership_top_txt5 &&
    topText.push(partnership.partnership_top_txt5)
  const midText = []
  partnership.partnership_mid_txt1 &&
    midText.push(partnership.partnership_mid_txt1)
  partnership.partnership_mid_txt2 &&
    midText.push(partnership.partnership_mid_txt2)
  partnership.partnership_mid_txt3 &&
    midText.push(partnership.partnership_mid_txt3)
  partnership.partnership_mid_txt4 &&
    midText.push(partnership.partnership_mid_txt4)
  partnership.partnership_mid_txt5 &&
    midText.push(partnership.partnership_mid_txt5)
  const botText = []
  partnership.partnership_bot_txt1 &&
    botText.push(partnership.partnership_bot_txt1)
  partnership.partnership_bot_txt2 &&
    botText.push(partnership.partnership_bot_txt2)
  partnership.partnership_bot_txt3 &&
    botText.push(partnership.partnership_bot_txt3)
  partnership.partnership_bot_txt4 &&
    botText.push(partnership.partnership_bot_txt4)
  partnership.partnership_bot_txt5 &&
    botText.push(partnership.partnership_bot_txt5)

  return (
    <div className='centerContainer'>
      <div className='mainContainer width100'>
        <RibbonTitle
          title={partnership.partnership_banner_title}
          picto={partnership.partnership_banner_picto}
        />
        <CreamBox
          creamTitle={partnership.partnership_top_title}
          creamPic={topPic}
          creamText={topText}
        />
        <GreenBox
          greenTitle={partnership.partnership_mid_title}
          greenPic={midPic}
          greenText={midText}
        />
        <div className='partners'>
          <p className='cream paragraph'>
            LA BOÎTE D’À CÔTÉ a pu voir le jour grâce à l’engagement de nombreux
            bénévoles et de partenaires locaux avec lesquels elle garde des
            relations privilégiées:
          </p>
          <p className='cream paragraph'>{partnersFront}</p>
          <PartnerList partners={partnersList} />
        </div>
        <GreenBoxText
          greenTitle={partnership.partnership_bot_title}
          greenPic={botPic}
          greenText={botText}
        />
        <div className='thanks'>Merci, à bientôt !</div>
        <BottomCenter />
      </div>
    </div>
  )
}

export default Partners
