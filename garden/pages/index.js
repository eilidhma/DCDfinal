import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import LandingInfo from '../comps/LandingBio'
import Description from '../comps/DescriptiveText'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import Clouds from '../comps/Clouds';


export default function Home() {

  const router = useRouter()

  return (
    <div className="garden">
      <div className="background"><Clouds/></div>
      <div className="app">
        <div className="main">
          <HeroImg src="clouds.png" height="50%"/>
          <LargeTitles text="Welcome to"/>
          <MainImg src="logo-white.png" width="20%"/>
          <LandingInfo titleText="Creators:" bodyText="Eilidh, Zoë, and Alex"/>
          <Description text="Let’s learn the benefits of growing your own food and how you can start yourself!"/>
          <ButtonUI text="Why Grow Food at Home" routeTo="/info" onClick={() => router.push('/info')}/>
          <ButtonUI text="What You Should Grow" routeTo="/quiz/question1" onClick={() => router.push('/quiz/question1')}/>
        </div>
      </div>
    </div>
  )
}
