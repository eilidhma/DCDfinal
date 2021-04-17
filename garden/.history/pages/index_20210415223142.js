import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/ContentImg'
import LandingInfo from '../comps/LandingBio'
import Description from '../comps/DescriptiveText'
import ButtonUI from '../comps/MainButton'

export default function Home() {
  return (
    <div className="main">
      <HeroImg src="clouds.svg"/>
      <LargeTitles text="Welcome to"/>
      <MainImg src="logo-white.png"/>
      <LandingInfo titleText="Creators:" bodyText="Eilidh, Zoë, Ash and Alex"/>
      <Description text="Let’s learn the benefits of growing your own food and how you can start yourself!"/>
      <ButtonUI text=""/>
      <ButtonUI />
    </div>
  )
}