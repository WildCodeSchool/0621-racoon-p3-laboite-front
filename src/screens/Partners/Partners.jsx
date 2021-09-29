// import { useState, useEffect } from 'react'
// import axios from 'axios'

import BottomCenter from '../../components/BottomCenter/BottomCenter'
import CreamBox from '../../components/CreamBox/CreamBox'
import GreenBox from '../../components/GreenBox/GreenBox'
import RibbonTitle from '../../components/RibbonTitle/RibbonTitle'
import BlockPartners from '../../components/BlockPartners/BlockPartners'

// import homebanner from '../../assets/blere-beach.png'
import fistbump from '../../assets/partners-fistbump.png'
import puzzle from '../../assets/partners-puzzle.png'

import './Partners.css'

const Partners = () => {
  const partnerTitle = "L'association et ses partenaires"
  const partnerPicto = 'hands-helping'
  const creamText = ['Proposer aux personnes durablement privées d’emploi (PPDE) un emploi en contrat à durée indéterminée, à temps choisi, dans le cadre de l’expérimentation nationale « Territoire zéro chômeur de longue durée ».', 'Produire et vendre tous types de biens et/ou services auprès des particuliers, des professionnels, des associations et des collectivités territoriales.', 'Initier ou prendre part à toute initiative susceptible de favoriser le développement de l’emploi et corrélativement d’activités économiques sur le territoire.']
  const creamTitle = 'Sa mission'
  const creamPic = [fistbump]
  const greenTitle = "Fonctionnement"
  const greenText = ['Elle agit en collaboration avec un Comité Local pour l’Emploi dont les membres sont des élus et/ou des acteurs du territoire pour lesquels la lutte contre le chômage de longue durée est une priorité. Il est présidé par Fabien NEBEL, Maire de Bléré']
  const greenPic = [puzzle]
  const partnersList = ['pink', 'purple', 'orange', 'cyan', 'yellow']

  // const [partners, setPartners] = useState([])
  // useEffect(() => {
  //   const getPartners = () => {
  //     axios
  //       .get('http://localhost:4000/partenaires')
  //       .then(res => setPartners(res.data[0]))
  //   }
  //   getPartners()
  // }, [])

  return (
    <div className='centerContainer'>
      <div className='mainContainer width100'>
        {/* <div className='banner-top'>
          <img src={homebanner} />
        </div> */}
        <RibbonTitle title={partnerTitle} picto={partnerPicto} />
        <CreamBox title={creamTitle} text={creamText} pictures={creamPic}/>
        <GreenBox title={greenTitle} text={greenText} pictures={greenPic}/>
        <p className='cream paragraph'>LA BOÎTE D’À CÔTÉ a pu voir le jour grâce à l’engagement de nombreux bénévoles et de partenaires locaux avec lesquels elle garde des relations privilégiées :<br/>Commune de Bléré / Communauté de Communes Bléré-Val de Cher / Département d’Indre et Loire / Région Centre – Val de Loire / CRI (Château Renault Insertion) / Association LA MAIN TENDUE (Bléré) / Pôle Emploi / Chambres consulaires/ Rotary club d’Amboise (IL Y EN AURA D’AUTRES)</p>
        <BlockPartners partners={partnersList} />
        <div className='green paragraph'>
          <p>Si vous aussi, entreprise ou particulier, vous souhaitez apporter votre aide à LA BOÎTE D’À CÔTÉ et participer à la réussite de cette expérimentation, vous pouvez :</p>
          <ul>
            <li>Offrir votre temps en qualité de bénévole</li>
            <li>Faire une donation en numéraire ou en matériel</li>
            <li>Proposer du mécénat de compétences</li>
            <li>Parler de nous, nous aider à nous faire connaître</li>
            <li>...</li>
          </ul>
        </div>
        <div className='thanks'>Merci, à bientôt !</div>
        <BottomCenter />
      </div>
    </div>
  )
}

export default Partners
