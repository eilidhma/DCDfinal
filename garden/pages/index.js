import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import LandingInfo from '../comps/LandingBio'
import MenuText from '../comps/MenuText'
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
          <LargeTitles text="Welcome to"/>
          <MainImg src="logo-white.png" width="30%"/>
          <LandingInfo titleText="Creators:" bodyText="Eilidh, Zoë, and Alex"/>
          <MenuText text="With Garden, you will learn more about some benefits that growing at home have for our planet, the bees and yourself."/>
          <MenuText text="Then, through a 3-questions questionnaire, Garden will be able to find perfect recommendations for plants that fit your needs."/>
          <ButtonUI text="Why Grow Food at Home" routeTo="/info" onClick={() => router.push('/info')}/>
          <ButtonUI text="What You Should Grow" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
        </div>
      </div>
    </div>
  )
}
