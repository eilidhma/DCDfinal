import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/ContentImg'
import LandingInfo from '../comps/LandingBio'

export default function Home() {
  return (
    <div className="main">
      <HeroImg src="clouds.svg"/>
      <LargeTitles text="Welcome to"/>
      <MainImg src="logo-white.png"/>
      <LandingInfo titleText="Creators" bodyText="Creators:
Eilidh, Zoë, Ash & Alex"/>
      
    </div>
  )
}