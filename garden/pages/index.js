import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import LandingInfo from '../comps/LandingBio'
import MenuText from '../comps/MenuText'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import Clouds from '../comps/Clouds';
import Menu from '../comps/HambMenu'
import Logo from '../comps/Logo'


export default function Home() {

  const router = useRouter()

  return (
    <div className="garden">
      <div className="background"><Clouds /></div>
      <div className="app">
        <div className="main">
          <Menu/>
          <Logo/>
          <div className="content">
            <LargeTitles text="Welcome to"/>
            <MainImg src="logo-white.png" width="43vw"/>
            <MenuText text="With Garden, you will learn more about some benefits that growing plants offer for our planet, the bees and yourself. Then, we will recommend plants for you to grow based on your individual needs!"/>
            <ButtonUI text="Why Grow Food at Home" routeTo="/info" onClick={() => router.push('/info')}/>
            <ButtonUI text="What You Should Grow" routeTo="/quiz/question1" onClick={() => router.push('/quiz/question1')}/>
            <LandingInfo titleText="Creators:" bodyText="Eilidh, Zoë, and Alex"/>
          </div>
        </div>
      </div>
    </div>
  )
}
