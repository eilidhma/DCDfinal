import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/ContentImg'
import LandingInfo from '../comps/LandingBio'
import Description from '../comps/DescriptiveText'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'


export default function Quiz() {

  const router = useRouter()

  return (
    <div className="main">
      <StatusBar percent="0%" width="5%"/>
      <MedTitles text="Question "/>
      <ButtonUI text="Why Grow Food at Home" routeTo="/info" onClick={() => router.push('/info')}/>
      <ButtonUI text="What You Should Grow" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
    </div>
  )
}