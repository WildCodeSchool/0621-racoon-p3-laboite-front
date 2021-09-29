import CreamBox from '../../components/CreamBox/CreamBox'
import BlockFunction from './BlockFunction'
import BlockPartners from './BlockPartners'
import RibbonTitle from '../../components/RibbonTitle/RibbonTitle'
import homebanner from '../../assets/blere-beach.png'

import fistbump from '../../assets/partners-fistbump.png'
import './Partners.css'

const Partners = () => {
  const partnerTitle = "L'association et ses partenaires"
  const partnerPicto = 'hands-helping'
  const missionText = ['Proposer aux personnes durablement privées d’emploi (PPDE) un emploi en contrat à durée indéterminée, à temps choisi, dans le cadre de l’expérimentation nationale « Territoire zéro chômeur de longue durée ».', 'Produire et vendre tous types de biens et/ou services auprès des particuliers, des professionnels, des associations et des collectivités territoriales.', 'Initier ou prendre part à toute initiative susceptible de favoriser le développement de l’emploi et corrélativement d’activités économiques sur le territoire.']
  const missionTitle = 'Sa mission'
  const pictures = [fistbump]

  return (
    <div className='mainContainer width100'>
      <div className='banner-top'>
        <img src={homebanner} />
      </div>
      <RibbonTitle title={partnerTitle} picto={partnerPicto} />
      <CreamBox title={missionTitle} text={missionText} pictures={pictures}/>
      {/* <BlockFunction /> */}
      {/* <div className='services'></div> */}
      {/* <BlockPartners /> */}
      {/* <div className='give'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quis consequuntur magnam corrupti quibusdam excepturi voluptatibus
          dignissimos maiores laboriosam aliquid vel reprehenderit nesciunt,
          magni assumenda
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
      </div> */}
      <div className='contactBlock'>Contact</div>
      <div className='thanks'>Merci</div>
    </div>
  )
}

export default Partners
