import CreamBox from '../../components/CreamBox/CreamBox'
import GreenBox from '../../components/GreenBox/GreenBox'
import BlockFunction from './BlockFunction'
import BlockPartners from './BlockPartners'
import RibbonTitle from '../../components/RibbonTitle/RibbonTitle'
import homebanner from '../../assets/blere-beach.png'

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

  return (
    <div className='mainContainer width100'>
      <div className='banner-top'>
        <img src={homebanner} />
      </div>
      <RibbonTitle title={partnerTitle} picto={partnerPicto} />
      <CreamBox title={creamTitle} text={creamText} pictures={creamPic}/>
      <GreenBox title={greenTitle} text={greenText} pictures={greenPic}/>
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
