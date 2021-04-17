import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/ContentImg'
import LandingInfo from '../comps/LandingBio'

export default function Home() {
  return (
    <div className="main">
      <HeroImg src="clouds.svg"/>
      <LargeTitles text="Welcome to"/>
      <MainImg src="logo-white.svg"/>
      <LandingInfo titleText="Our topic for this app:" bodyText="We want to bring more awareness towards growing your own plants, vegetables and herbs to prevent more food waste and/or packaging waste caused by the sales of plants."/>
      
    </div>
  )
}