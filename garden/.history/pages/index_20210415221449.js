import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/ContentImg'
import LandingInfo from '../comps/LandingBio'
import Description from '../comps/DescriptiveText'

export default function Home() {
  return (
    <div className="main">
      <HeroImg src="clouds.svg"/>
      <LargeTitles text="Welcome to"/>
      <MainImg src="logo-white.png"/>
      <LandingInfo titleText="Creators:" bodyText="Eilidh, Zoë, Ash and Alex"/>
      <Description text="Let’s learn the benefits of growing your own food \& how you can start yourself!"/>
    </div>
  )
}